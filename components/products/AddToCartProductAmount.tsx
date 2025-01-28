"use client";
import { useState } from "react";
import SelectProductAmountProduct from "./SelectProductAmountProduct";
import { Mode } from "./SelectProductAmountProduct";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
// import { addToCartAction } from "@/utils/actions";
import { addToCartActionProduct } from "@/utils/actions";
import { useAuth } from "@clerk/nextjs";
import { ProductSignInButton } from "../form/Buttons";

function AddToCartProductAmount({
  path,
  productId,
  amountClient,
  colorClient,
  priceClient,
}: // addToCart,
{
  path: string;
  productId: string;
  amountClient: number;
  colorClient: string;
  priceClient: number;
  // addToCart: () => void;
}) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  return (
    <div className="flex flex-row gap-x-2 ml-[-48px]">
      <div className="hidden">
        {" "}
        <SelectProductAmountProduct
          mode={Mode.SingleProduct}
          amount={amountClient || 1}
          setAmount={setAmount}
        />
      </div>

      {userId ? (
        <FormContainer action={addToCartActionProduct}>
          <div className="hidden">
            <input type="text" name="path" value={path} readOnly />
            <input type="text" name="productId" value={productId} readOnly />
            <input type="number" name="amount" value={amountClient} readOnly />
            <input type="text" name="color" value={colorClient} readOnly />
            <input type="number" name="price" value={priceClient} readOnly />
          </div>
          <SubmitButton
            // onClick={addToCart}
            text="add to cart"
            className="text-sm lg:text-base 2xl:text-lg"
          />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
}
export default AddToCartProductAmount;
