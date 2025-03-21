import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/utils/actionsServer";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";

async function EditProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await fetchAdminProductDetails(id);
  const {
    name,
    company,
    description,
    featured,
    price,
    images,
    colors,
    prices,
    color,
    category,
    originId,
    type,
    title,
    productJson,
  } = product;
  return (
    <div
    // className="productsContent px-0.5 sm:px-2 lg:px-4 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2 "
    >
      <h1 className="text-2xl font-semibold mb-8 capitalize">update product</h1>
      <div className="border p-8 rounded">
        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          image={product.image}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="type"
              label="type"
              defaultValue={type}
            />
            <FormInput
              type="text"
              name="title"
              label="title"
              defaultValue={title}
            />
            <FormInput type="text" name="company" defaultValue={company} />
            <PriceInput defaultValue={price} />
            <FormInput
              type="text"
              name="color"
              label="color"
              defaultValue={color}
            />
            <FormInput
              type="text"
              name="category"
              label="category"
              defaultValue={category}
            />
            <FormInput
              type="text"
              name="originId"
              label="originId"
              defaultValue={originId}
            />

            <FormInput
              type="text"
              name="images"
              label="images"
              defaultValue={images}
            />
            <FormInput
              type="text"
              name="colors"
              label="colors"
              defaultValue={colors}
            />
            <FormInput
              type="text"
              name="prices"
              label="prices"
              defaultValue={prices}
            />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
          />
          <TextAreaInput
            name="productJson"
            labelText="productJson"
            defaultValue={productJson || "undefined"}
          />
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="featured"
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </div>
  );
}
export default EditProductPage;

// function EditProductPage() {
//   return (
//     <div>EditProductPage</div>
//   )
// }
// export default EditProductPage
