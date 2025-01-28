"use client";
import { useState } from "react";
import SelectProductAmount from "./SelectProductAmount";
import { Mode } from "./SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/utils/actions";
import { addToCartActionUrl, addToCartActionNew } from "@/utils/actionsServer";
import { useAuth } from "@clerk/nextjs";
import { ProductSignInButton } from "../form/Buttons";

function AddToCartUrl({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      <div className="mt-4 flex flex-row items-center gap-2">
        <SelectProductAmount
          mode={Mode.SingleProduct}
          amount={amount}
          setAmount={setAmount}
        />
      </div>
      <div className="mt-4 flex flex-col items-center gap-2">
        {userId ? (
          <FormContainer action={addToCartActionUrl}>
            <input type="hidden" name="productId" value={productId} />
            <input type="hidden" name="amount" value={amount} />
            <SubmitButton text="add to cart" className="" />
          </FormContainer>
        ) : (
          <ProductSignInButton />
        )}
      </div>
    </div>
  );
}
export default AddToCartUrl;
