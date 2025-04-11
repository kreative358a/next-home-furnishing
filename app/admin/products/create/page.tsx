import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createProductAction } from "@/utils/actionsServer";
import { faker } from "@faker-js/faker";

function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  const imageAlt = faker.book.title();
  const color_1 = faker.color.human();
  const color_2 = faker.color.human();
  const color_3 = faker.color.human();
  const image_1 = faker.image.avatar();
  const image_2 = faker.image.avatar();
  const image_3 = faker.image.avatar();
  const array_colors = [color_1, color_2, color_3];
  const array_images = [image_1, image_2, image_3];
  const categoryName = faker.commerce.department();
  const originId = faker.string.alphanumeric(12);
  const price_1 = faker.number.int({ min: 100, max: 200 });
  const price_2 = faker.number.int({ min: 100, max: 200 });
  const price_3 = faker.number.int({ min: 100, max: 200 });
  const array_prices = [price_1, price_2, price_3];
  // const imageUrl = faker.image.url({
  //   width: 640,
  //   height: 480,
  // })
  return (
    <div
      className="border-2 border-foreground/40"
      // className="productsContent px-0.5 sm:px-2 lg:px-4 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2 "
    >
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 mt-20 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="title"
              label="product title"
              defaultValue={imageAlt}
              // value={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />
            <FormInput
              type="text"
              name="color"
              label="color"
              defaultValue={color_1}
            />
            <FormInput
              type="text"
              name="colors"
              label="colors"
              defaultValue={array_colors.toString()}
            />
            <FormInput
              type="text"
              name="category"
              label="product category"
              defaultValue={categoryName}
            />
            <FormInput
              type="text"
              name="type"
              label="product type"
              defaultValue={categoryName}
            />
            <FormInput
              type="text"
              name="type"
              label="product type"
              defaultValue={categoryName}
            />
            <FormInput
              type="text"
              name="prices"
              label="prices"
              defaultValue={array_prices.toString()}
            />
            <FormInput
              type="text"
              name="originId"
              label="product Id"
              defaultValue={originId}
              // value={name}
            />
            <FormInput
              type="text"
              name="images"
              label="images"
              defaultValue={array_images.toString()}
            />

            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          <TextAreaInput
            name="productJson"
            labelText="productJson"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>
          <SubmitButton text="create product" className="mt-8" />
        </FormContainer>
      </div>
    </div>
  );
}
export default CreateProductPage;
