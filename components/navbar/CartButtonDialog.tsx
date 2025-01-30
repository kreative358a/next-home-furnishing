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
import CartContent from "./CartContent";

import CartItemsList from "./CartItemsList";
import CartTotals from "./CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/utils/actionsServer";
import { redirect } from "next/navigation";
import { CartItem } from "@prisma/client";
import Link from "next/link";
import EmptyList from "../global/EmptyList";

type CartItemNew = {
  productId: string;
  amount: number;
  color: string;
  price: number;
  name: string;
  image: string;
};

async function CartButtonDialog() {
  const numItemsInCart = await fetchCartItems();

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
        className="dialog-content-main bg-muted/80 hover:bg-muted/90 min-w-[96%] md:min-w-[90%] max-h-[98%]  mt-4 text-transparent"
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
        {numItemsInCart === 0 ? (
          <DialogHeader>
            <DialogTitle>
              <EmptyList className="text-secondary-foreground" />
            </DialogTitle>
          </DialogHeader>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>
                <Link href={`/cart`}>
                  <DialogClose asChild>
                    <Button className="ml-[12px] w-[600px] max-w-[94%] mx-auto mt-8 text-sm lg:text-base 3xl:text-lg">
                      redirect to cart
                    </Button>
                  </DialogClose>
                </Link>
              </DialogTitle>
            </DialogHeader>
            <div className=" dialog-content-background-cart h-[80%] 3xl:h-[100%] max-h-[760px] bg-muted/20 hover:bg-muted/40 text-secondary-foreground">
              <CartContent />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default CartButtonDialog;
