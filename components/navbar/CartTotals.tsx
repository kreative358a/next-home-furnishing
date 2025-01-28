import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/format";
// import { createOrderAction } from "@/utils/actionsServer";
// import FormContainer from "../form/FormContainer";
// import { SubmitButton } from "../form/Buttons";
import { Cart } from "@prisma/client";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";

function CartTotals({
  cart,
  cartItemsJson,
}: {
  cart: Cart;
  cartItemsJson: string;
}) {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="Subtotal" amount={cartTotal} />
        <CartTotalRow label="Shipping" amount={shipping} />
        <CartTotalRow label="Tax" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="Order Total" amount={orderTotal} lastRow />
        </CardTitle>
      </Card>
      {/* <FormContainer action={createOrderAction}>
        <input
          type="hidden"
          name="cartItemsJson"
          defaultValue={cartItemsJson}
        />
        <SubmitButton text="Place Order" className="w-full mt-8" />
        </FormContainer> */}
      {/* <Link
        href={`/cart`}
        // className="underline text-muted-foreground tracking-wide capitalize px-2"
      >
        <Button className="w-full mt-8 text-sm lg:text-base 3xl:text-lg">
          redirect to cart
        </Button>
      </Link> */}
    </div>
  );
}

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
}

export default CartTotals;
