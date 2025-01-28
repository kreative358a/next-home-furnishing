"use client";
import { useState } from "react";
import SelectProductAmountServer from "./SelectProductAmountServer";
import { Mode } from "./SelectProductAmountServer";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/utils/actions";
import {
  addToCartActionUrl,
  addToCartActionNew,
  addToCartActionClient,
  addToCartActionServerSinglePage,
} from "@/utils/actionsServer";
import { useAuth } from "@clerk/nextjs";
import { ProductSignInButton } from "../form/Buttons";

function AddToCartServerAmountSinglePage({
  productId,
  amountClient,
  colorClient,
  priceClient,
}: // addToCart,
{
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
        <SelectProductAmountServer
          mode={Mode.SingleProduct}
          amount={amountClient || 1}
          setAmount={setAmount}
        />
      </div>

      {userId ? (
        <FormContainer action={addToCartActionServerSinglePage}>
          <div className="hidden">
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
export default AddToCartServerAmountSinglePage;

// import { Button } from '../ui/button';

// function AddToCart({ productId }: { productId: string }) {
//   return (
//     <Button className='capitalize mt-8' size='lg'>
//       add to cart
//     </Button>
//   );
// }
// export default AddToCart;
