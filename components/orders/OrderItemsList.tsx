// "use client";

import { Card } from "@/components/ui/card";
import { FirstColumn, SecondColumn, FourthColumn } from "./OrderItemColumns";
import ThirdColumn from "./ThirdColumn";
import { CartItemWithProduct } from "@/utils/types";
import { fetchSingleProduct, findExistingReview } from "@/utils/actionsServer";
type OrderItemsProps = {
  productId: string;
  amount: number;
  color: string;
  price: number;
  name: string;
  image: string;
};

function CartItemsList({ order }: { order: { [x: string]: any } }) {
  const { products, orderTotal, tax, shipping, createdAt, orderItemsJson } =
    order;

  const orderItems = JSON.parse(orderItemsJson);
  return (
    <div>
      {orderItems.map((orderItem: OrderItemsProps) => {
        const { productId, amount, color, price, name, image } = orderItem;

        return (
          <Card
            key={productId}
            className="flex flex-row justify-between gap-y-4 flex-wrap p-6 mb-8 gap-x-4"
          >
            <FirstColumn image={image} name={name} />

            <div className="flex flex-col gap-y-4 md:flex-row gap-x-4">
              <SecondColumn
                name={name}
                color={color}
                price={price}
                productId={productId}
              />
              <ThirdColumn id={productId} quantity={amount} />
            </div>
            <FourthColumn price={price} amount={amount} />
          </Card>
        );
      })}
    </div>
  );
}
export default CartItemsList;
