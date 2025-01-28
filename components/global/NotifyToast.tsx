"use client";
import { ReactNode } from "react";
// const text = "first try"
// const type = "error"
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

export function CartNotifyButton({
  type,
  text,
  numItemsInCart,
}: {
  type: string;
  text: string;
  numItemsInCart: number;
}) {
  const notify = () => {
    if (type === "error") {
      return toast.error(text);
    }
    if (type === "success") {
      return toast.success(text);
    }
    if (type === "info") {
      return toast.info(text);
    }
    if (type === "warning") {
      return toast.warning(text);
    }
    return toast(text);
  };

  return (
    <>
      <div className="mt-10">
        <Button size="lg" className="mt-10 max-lg:hidden text-lg">
          Our Products
        </Button>
      </div>
      <ToastContainer
        transition={Bounce}
        position="top-center"
        theme="colored"
      />
    </>
  );
}

export function NotifyButton() {
  const notify = () => {
    toast.error("you have to be log in");
  };

  return (
    <>
      <Button onClick={notify} size="lg" className="mt-10 text-lg">
        Our Products
      </Button>
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
