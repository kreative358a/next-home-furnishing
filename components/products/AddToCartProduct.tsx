"use client";
import { useState } from "react";
import SelectProductAmountClient from "./SelectProductAmountProduct";
import { Mode } from "./SelectProductAmountProduct";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { addToCartActionProduct } from "@/utils/actions";
// import { addToCartActionUrl, addToCartActionNew } from "@/utils/actionsServer";
import { useAuth } from "@clerk/nextjs";
import { ProductSignInButton } from "../form/Buttons";

function AddToCartProduct({
  productId,
  color,
  price,
}: {
  productId: string;
  color: string;
  price: number;
}) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  return (
    <div className="flex flex-row gap-x-2 ml-[-48px]">
      <SelectProductAmountClient
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartActionProduct}>
          <div className="hidden">
            <input type="text" name="color" defaultValue={color} />
            <input type="number" name="price" defaultValue={price} />
            <input
              type="text"
              name="productId"
              value={productId}
              readOnly={true}
            />
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
export default AddToCartProduct;
