import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { LuShoppingCart } from "react-icons/lu";
import { fetchCartItems } from "@/utils/actionsServer";
// import CartContent from "./CartContent";
import { auth } from "@clerk/nextjs/server";
import CartItemsList from "./CartItemsList";
import CartTotals from "./CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/utils/actionsServer";
import { redirect } from "next/navigation";
import { CartItem } from "@prisma/client";
import Link from "next/link";

type CartItemNew = {
  productId: string;
  amount: number;
  color: string;
  price: number;
  name: string;
  image: string;
};

async function CartButtonDialog() {
  const { userId } = auth();
  const numItemsInCart = await fetchCartItems();

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

  // console.log("cartItemsNew: ", cartItemsNew);
  // console.log("typeof cartItemsNew: ", typeof cartItemsNew);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="flex justify-center items-center relative mx-2"
        >
          <LuShoppingCart />
          <span className="absolute -top-3 -right-3 bg-primary  text-white dark:text-blue-950 rounded-full h-6 w-6 flex items-center justify-center text-xs">
            {numItemsInCart}
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        // className="dialog-content-main bg-muted/80 hover:bg-muted/90 min-w-[96%] md:min-w-[90%] max-h-[800px]"
        className="dialog-content-main bg-muted/80 hover:bg-muted/90 min-w-[96%] md:min-w-[90%] max-h-[98%] h-[800px] mt-4 text-transparent"
      >
        <DialogClose asChild>
          <Button
            className="absolute w-20 text-base right-2 top-2 "
            type="button"
            variant="secondary"
          >
            Close
          </Button>
        </DialogClose>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        {/* <ScrollArea className="min-h-[90%] py-4"> */}
        <div className="dialog-content-background max-h-[760px] text-secondary-foreground">
          {/* <CartContent /> */}
          {/* </ScrollArea> */}

          <div
            // className="bg-scroll"
            className="dialog-content max-h-[700px] mt-[20px]"
          >
            <SectionTitle text="Shopping Cart" />
            <div className="mt-8 flex flex-col lg:grid gap-4 lg:grid-cols-12 min-[440px]:px-2">
              <div className="grid grid-col lg:col-span-8">
                <CartItemsList cartItems={cartItems} />
              </div>
              <div className="grid grid-col lg:col-span-4">
                <CartTotals cart={currentCart} cartItemsJson={cartItemsNew} />
                <Link
                  href={`/cart`}
                  // className="underline text-muted-foreground tracking-wide capitalize px-2"
                >
                  {" "}
                  <DialogClose asChild>
                    <Button className="w-[80%] mx-auto mt-8 text-sm lg:text-base 3xl:text-lg">
                      redirect to cart
                    </Button>
                  </DialogClose>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CartButtonDialog;
