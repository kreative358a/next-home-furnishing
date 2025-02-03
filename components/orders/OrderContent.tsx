/* eslint-disable @next/next/no-async-client-component */
// "use client"
import OrderItemsList from "./OrderItemsList";
import CartTotals from "./OrderTotals";
import SectionTitle from "@/components/global/SectionTitle";
// import { fetchOrCreateCart, updateCart } from "@/utils/actionsServer";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { CartItem } from "@prisma/client";

type CartItemNew = {
  productId: string;
  amount: number;
  color: string;
  price: number;
  name: string;
  image: string;
};

// async function OrderContent({ order }: { order: { [x: string]: any } }) {
async function OrderContent({
  order,
}: {
  order: { [x: string]: string | number };
}) {
  // const { userId } = auth();

  // if (!userId) redirect("/");
  const {
    products,
    orderTotal,
    cartTotal,
    tax,
    shipping,
    createdAt,
    orderItemsJson,
  } = order;

  return (
    <div
      // className="bg-scroll"
      // className="dialog-content max-h-[700px] mt-[20px]"
      className="dialog-content h-[98%] sm:h-[94%] 3xl:h-[100%] max-h-[740px] pl-2 pr-0 sm:p-4 mx-auto"
    >
      <SectionTitle text={`Number of Products ${products}`} />
      <div
        className="mt-8 flex flex-col lg:grid gap-4 lg:grid-cols-12 "
        // className="mt-8 flex flex-col lg:grid gap-4 lg:grid-cols-12 min-[440px]:px-2"
      >
        <div
          // className="grid grid-col lg:col-span-8"
          className="grid grid-col lg:col-span-8 w-[100%] max-w-[100%]"
        >
          <OrderItemsList order={order} />
        </div>
        <div
          // className="grid grid-col lg:col-span-4"
          className="grid grid-col lg:col-span-4 pr-1"
        >
          <CartTotals order={order} />
        </div>
      </div>
    </div>
  );
}
export default OrderContent;
