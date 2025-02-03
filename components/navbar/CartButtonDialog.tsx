import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
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
          className="flex justify-center items-center relative mx-2 bg-muted/80"
        >
          <LuShoppingCart />
          <span className="absolute -top-3 -right-3 bg-primary text-white dark:text-blue-950 rounded-full h-6 w-6 flex items-center justify-center text-xs">
            {numItemsInCart}
          </span>
        </Button>
      </DialogTrigger>
      {numItemsInCart === 0 ? (
        <DialogContent
          aria-describedby={undefined}
          // className="dialog-content-main bg-muted/80 hover:bg-muted/90 min-w-[96%] md:min-w-[90%] max-h-[800px]"
          className="dialog-content-main bg-muted/80 hover:bg-muted/90 max-w-[98%] min-w-[98%] sm:max-w-[96%] sm:min-w-[96%] md:max-w-[90%] md:min-w-[90%] max-h-[98%]  mt-4 text-transparent"
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
            <DialogTitle>
              <EmptyList className="text-secondary-foreground" />
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      ) : (
        <DialogContent
          aria-describedby={undefined}
          // className="dialog-content-main bg-muted/80 hover:bg-muted/90 min-w-[96%] md:min-w-[90%] max-h-[800px]"
          className="dialog-content-main bg-muted/80 hover:bg-muted/90 max-w-[98%] min-w-[98%] sm:max-w-[96%] sm:min-w-[96%] md:max-w-[90%] md:min-w-[90%] max-h-[98%] p-0 sm:p-2 my-4 text-transparent rounded-md mx-auto"
        >
          <DialogClose asChild>
            <Button
              className="absolute w-20 text-base right-2 top-2 "
              type="button"
              // variant="secondary"
            >
              Close
            </Button>
          </DialogClose>
          <DialogHeader className="mt-8">
            <DialogTitle>
              <Link href={`/cart`}>
                <DialogClose className="" asChild>
                  <Button className="sm:ml-[12px] min-w-[380px] max-w-[90%] mt-8 text-base lg:text-lg 3xl:text-xl">
                    redirect to cart
                  </Button>
                </DialogClose>
              </Link>
            </DialogTitle>
          </DialogHeader>
          <div
            className=" dialog-content-background-cart max-h-[680px] md:h-[90%] md:max-h-[720px] min-[940px]:max-h-[760px] lg:max-h-[740px] 2xl:h-[90%] 3xl:h-[100%] 3xl:max-h-[760px] bg-muted/20 hover:bg-muted/40 text-secondary-foreground max-w-[100%]"
            // className=" dialog-content-background-cart h-[90%] 2xl:h-[80%] 3xl:h-[100%] max-h-[760px] bg-muted/20 hover:bg-muted/40 text-secondary-foreground max-w-100%"
          >
            <CartContent />
            <DialogFooter className="min-h-4 items-center text-foreground text-center justify-center">
              <p className="text-center text-primary/40 text-base lg:text-lg mx-auto my-1">
                end of cart
              </p>
            </DialogFooter>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

export default CartButtonDialog;
