"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useAppSelector } from "@/hooks/hooks";
import { fetchCartItems } from "@/utils/actions";
import { useState, useEffect } from "react";

const getNumItemsFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const itemsLocal = Number(localStorage.getItem("numItemsInCart"));
    return itemsLocal || 0;
  }
  // return 0;
  return 0;
};

function CartButtonClient() {
  //   const numItemsInCart = useAppSelector(
  //     (state) => state.cartState.numItemsInCart
  //   );
  const [numItems, setNumItems] = useState<number>();
  const [numItemsLocal, setNumItemsLocal] = useState<number>(
    getNumItemsFromLocalStorage
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getNumItemsCart = async () => {
      const numItemsInCart = await fetchCartItems();
      setNumItems(numItemsInCart);
      localStorage.setItem("numItemsInCart", numItemsInCart.toString());
    };
    getNumItemsCart();
    console.log(
      'Number(localStorage.getItem("numItemsInCart")): ',
      Number(localStorage.getItem("numItemsInCart"))
    );
    setIsClient(true);
  }, []);

  const basketId = "my_modal_basket";

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative bg-muted/80 hover:bg-muted/90 border-2 border-blue-700/60 hover:border-blue-700/90"
    >
      {/* <div
            className="btn btn-ghost btn-circle btn-md ml-4 pointer"
            onClick={() => document.getElementById(basketId).showModal()}
          > */}
      <div className="indicator">
        <ShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {isClient ? numItems : 0}
        </span>
        <span className="absolute -top-3 -left-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {isClient ? numItemsLocal : 0}
        </span>
      </div>
      {/* <CartDialog basketId={basketId} /> */}
      {/* </div> */}
    </Button>
  );
}
export default CartButtonClient;
