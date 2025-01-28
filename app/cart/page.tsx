import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/utils/actionsServer";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CarouselBackground from "@/components/cart/CarouselBackground";
import { fetchCartItems } from "@/utils/actionsServer";
// import { Item } from "@radix-ui/react-select";
import { CartItem } from "@prisma/client";

type CartItemNew = {
  productId: string;
  amount: number;
  color: string;
  price: number;
  name: string;
  image: string;
};

async function CartPage() {
  const { userId } = auth();
  const numItemsInCart = await fetchCartItems();
  if (!userId) redirect("/");

  const previousCart = await fetchOrCreateCart({ userId });

  // const cart = await updateCart(previousCart);
  const { currentCart, cartItems } = await updateCart(previousCart);

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

  // const cartItemsNew = removeProductKey(cartItems);
  console.log("cartItemsNew: ", cartItemsNew);
  console.log("typeof cartItemsNew: ", typeof cartItemsNew);
  return (
    <>
      <CarouselBackground />
      <div className="productsContent px-0.5 sm:px-2 lg:p-4 pt-4 pb-4 lg:mt-2">
        {cartItems.length === 0 ? (
          <SectionTitle text="Empty Cart" />
        ) : (
          <>
            <SectionTitle
              text={`Shopping Cart - number products: ${numItemsInCart}`}
            />
            <div className="mt-8 grid gap-4 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <CartItemsList cartItems={cartItems} />
              </div>

              <div className="lg:col-span-4">
                <CartTotals cart={currentCart} cartItemsJson={cartItemsNew} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default CartPage;
