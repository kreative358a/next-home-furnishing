import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "name must be at least 3 characters",
    })
    .max(100, {
      message: "name must be less than 100 characters",
    }),
  company: z.string().min(4, {
    message: "company must be at least 4 characters",
  }),
  featured: z.coerce.boolean(),
  price: z.coerce.number().int().min(0, {
    message: "- price must be a positive number",
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "- description must be between 10 and 1000 words",
    }
  ),
  color: z.string().min(3, {
    message: "color must be at least 4 characters",
  }),
  category: z.string().min(4, {
    message: "category must be at least 4 characters",
  }),
  originId: z.string().min(4),
  type: z.string().min(3, {
    message: "type must be at least 3 characters",
  }),
  title: z.string().min(3, {
    message: "title must be at least 3 characters",
  }),
  images: z.string().min(10, {
    message: "title must be at least 10 characters",
  }),
  prices: z.string().min(1, {
    message: "title must be at least 1 characters",
  }),
  colors: z.string().min(3, {
    message: "colors must be at least 3 characters",
  }),
  productJson: z.string().min(6, {
    message: "productJson must be at least 3 characters",
  }),
});

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const imageSchemaUrl = z.object({
  image: validateImageFileUrl(),
});

function validateImageFileUrl() {
  return z
    .any()
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    );
}

export const imageSchema = z.object({
  image: validateImageFile(),
});

// jeśli nie ma pliku lub rozmiar jest większy, upewniamy się, że
// jest mniejszy lub równy naszemu maxUploadSize, jeśli więc zostanie zwrócone false,
// otrzymamy komunikat o błędzie, jeśli nie, to kontynuuj logikę do czego zostanie użyty kolejny refine.
// szukający akceptowanych typów za pomocą funkcji, oraz drugiego komunikatu o błędzie.
// Sprawdzamy czy plik jest obrazem, przechodzimy do pliku, kolejny return,
// sprawdzamy czy plik jest obecny i wybiera AcceptedFiles.
// odnosi się do tego jako do typu. Z funkcji chcemy zwrócić plik. type i rozpocząć od type.

function validateImageFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "File size must be less than 1MB")
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
}

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(","));
  }
  return result.data;
}

export const reviewSchema = z.object({
  productId: z.string().refine((value) => value !== "", {
    message: "Product ID cannot be empty",
  }),
  authorName: z.string().refine((value) => value !== "", {
    message: "Author name cannot be empty",
  }),
  authorImageUrl: z.string().refine((value) => value !== "", {
    message: "Author image URL cannot be empty",
  }),
  rating: z.coerce
    .number()
    .int()
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must be at most 5" }),
  comment: z
    .string()
    .min(10, { message: "Comment must be at least 10 characters long" })
    .max(1000, { message: "Comment must be at most 1000 characters long" }),
});
