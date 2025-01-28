"use client";

import { Card } from "@/components/ui/card";
import { FirstColumn, SecondColumn, FourthColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";
import { CartItemWithProduct } from "@/utils/types";

// function CartItemsList({ cartItems }: { cartItems: cartItems[] }) {
function CartItemsList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <div>
      {cartItems.map((cartItem) => {
        // const { id, amount } = cartItem;
        const { id, amount, color, price } = cartItem;
        const { image, name, company, id: productId } = cartItem.product;
        // const { image, name, company, price, id: productId } = cartItem.product;
        // return (
        //   <Card
        //     key={id}
        //     className="flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 gap-x-4"
        //   >
        //     <FirstColumn image={image} name={name} />
        //     <SecondColumn name={name} company={company} productId={productId} />
        //     <ThirdColumn id={id} quantity={amount} />
        //     <FourthColumn price={price} />
        //   </Card>
        // );
        return (
          <Card
            key={id}
            className="flex flex-row justify-between gap-y-4 flex-wrap p-6 mb-8 gap-x-4"
          >
            <FirstColumn image={image} name={name} />

            <div className="flex flex-col gap-y-4 md:flex-row gap-x-4">
              <SecondColumn
                name={name}
                color={color}
                price={price}
                company={company}
                productId={productId}
                productCart={cartItem.product}
              />
              <ThirdColumn id={id} quantity={amount} />
            </div>
            {/* <FourthColumn price={price} /> */}
            <FourthColumn price={price} amount={amount} />
          </Card>
        );
      })}
    </div>
  );
}
export default CartItemsList;
