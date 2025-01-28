import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { fetchCartItems } from "@/utils/actions";
// import { auth } from "@clerk/nextjs/server";
import { ShoppingCart } from "../global/NotifyToast";

async function CartButton({ isUser }: { isUser: string }) {
  const numItemsInCart = await fetchCartItems();
  // const { userId } = auth();
  // const numItemsInCart = 9

  return (
    <>
      {isUser === "true" ? (
        <Button
          asChild
          variant="outline"
          size="icon"
          className="flex justify-center items-center relative"
        >
          <Link href="/cart">
            <LuShoppingCart />
            <span className="absolute -top-3 -right-3 bg-primary  text-white dark:text-blue-950 rounded-full h-6 w-6 flex items-center justify-center text-xs">
              {numItemsInCart}
            </span>
          </Link>
        </Button>
      ) : (
        <ShoppingCart numItemsInCart={numItemsInCart} />
      )}
    </>
  );
}
export default CartButton;
