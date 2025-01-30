"use client";
import { useState } from "react";
import SelectProductAmountClient from "./SelectProductAmountServer";
import { Mode } from "./SelectProductAmountServer";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/utils/actions";
import { addToCartActionUrl, addToCartActionNew } from "@/utils/actionsServer";
import { useAuth } from "@clerk/nextjs";
import { ProductSignInButton } from "../form/Buttons";

function AddToCartServerList({
  productId,
  color,
  price,
  name,
  image,
}: {
  productId: string;
  color: string;
  price: number;
  name: string;
  image: string;
}) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  return (
    <div className="flex flex-row gap-x-2">
      <SelectProductAmountClient
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartActionUrl}>
          <div className="hidden">
            <input type="text" name="name" defaultValue={name} />
            <br />
            <input type="text" name="image" defaultValue={image} />
            <br />
            <input type="text" name="color" defaultValue={color} />
            <br />
            <input type="number" name="price" defaultValue={price} />
            <br />
            <input
              type="text"
              name="productId"
              value={productId}
              readOnly={true}
            />
            <br />
            <input type="number" name="amount" value={amount} readOnly={true} />
          </div>
          <SubmitButton text="add to cart" className="py-0" />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
}
export default AddToCartServerList;

// import { Button } from '../ui/button';

// function AddToCart({ productId }: { productId: string }) {
//   return (
//     <Button className='capitalize mt-8' size='lg'>
//       add to cart
//     </Button>
//   );
// }
// export default AddToCart;
