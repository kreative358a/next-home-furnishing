"use client";
import { ReactNode } from "react";
// const text = "first try"
// const type = "error"
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

export function NotifyLinkImage({
  productId,
  image,
  name,
}: {
  productId: string;
  image: string;
  name: string;
}) {
  const notify = () => {
    toast.error("you have to be log in to continue");
  };
  return (
    <>
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt={name}
          className="rounded-md md:rounded-xl h-auto w-full object-cover border-2 border-slate-500/20"
        />
      </figure>
    </>
  );
}
// export function ToastContainer() {

//   return (
//       <ToastContainer
//         transition={Bounce}
//         position="bottom-center"
//         theme="colored"
//         className="absolute z-60"
//       />

//   );
// }

export function ShoppingCart({ numItemsInCart }: { numItemsInCart: number }) {
  const notify = () => {
    toast.error("you have to be log in to continue");
  };

  return (
    <>
      <Button
        // asChild
        variant="outline"
        size="icon"
        className="flex justify-center items-center relative"
        onClick={notify}
      >
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary  text-white dark:text-blue-950 rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Button>
    </>
  );
}
