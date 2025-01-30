/* eslint-disable @next/next/no-async-client-component */
// "use client"
import CartItemsList from "./CartItemsList";
import CartTotals from "./CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/utils/actionsServer";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { CartItem } from "@prisma/client";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

type CartItemNew = {
  productId: string;
  amount: number;
  color: string;
  price: number;
  name: string;
  image: string;
};

async function CartContent() {
  const { userId } = auth();

  if (!userId) redirect("/");

  const previousCart = await fetchOrCreateCart({ userId });

  // const cart = await updateCart(previousCart);
  const { currentCart, cartItems } = await updateCart(previousCart);

  //  if (cart.numItemsInCart === 0) return <SectionTitle text='Empty Cart' />;
  //  if (currentCart.numItemsInCart === 0) return <SectionTitle text='Empty Cart' />;
  // if (cartItems.length === 0) return <SectionTitle text="Empty Cart" />;
  function createOrderItemsJson(cartItems: CartItem[]): CartItemNew[] {
    return cartItems.map(
      ({ productId, amount, color, price, name, image }) => ({
        productId,
        amount,
        color,
        price,
        name,
        image,
      })
    );
  }

  const cartItemsNew = JSON.stringify(createOrderItemsJson(cartItems));

  // const cartItemsNew = removeProductKey(cartItems);
  // console.log("cartItemsNew: ", cartItemsNew);
  // console.log("typeof cartItemsNew: ", typeof cartItemsNew);
  return (
    <div
      // className="bg-scroll"
      className="dialog-content max-h-[700px] pl-2 pr-0 sm:p-4"
    >
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 flex flex-col lg:grid gap-4 lg:grid-cols-12 ">
        <div className="grid grid-col lg:col-span-8">
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className="grid grid-col lg:col-span-4">
          <CartTotals cart={currentCart} cartItemsJson={cartItemsNew} />
        </div>
      </div>
    </div>
  );
}
export default CartContent;
