// "use server";
"use client";
// import ProductsContainerUrl from "@/components/products/ProductsContainerUrl";
import ProductsContainerClient from "@/components/products-client/ProductsContainerClient";

import CarouselBackground from "@/components/products-client/CarouselBackground";
import { Separator } from "@/components/ui/separator";
// import { cookies } from "next/headers";
import { useState, useEffect } from "react";
import { fetchCartItems } from "@/utils/actions";
// import { useAuth } from "@clerk/clerk-react";
// import { auth } from "@clerk/nextjs/server";

function ProductsClientPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const [numItems, setNumItems] = useState<number>();
  // const [getUserId, setGetUserId] = useState<string>();
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  // const toastMsg = document.cookie;

  // console.log("toastMsg: ", toastMsg);
  // const { userId } = useAuth();

  // const [getUserId, setGetUserId] = useState<string | null | undefined>();
  useEffect(() => {
    const getNumItemsCart = async () => {
      const numItemsInCart = await fetchCartItems();
      setNumItems(numItemsInCart);
    };
    getNumItemsCart();
  }, []);
  // revalidatePath("/cart");

  // useEffect(() => {
  //   if (userId) {
  //     setGetUserId(userId);
  //   }
  // }, []);

  return (
    <div>
      <CarouselBackground />
      <div className="productsContent px-0.5 sm:px-2 pt-4 pb-4 lg:mt-2">
        <div className="text-primary bg-muted/60 shadow p-2 text-center rounded-md pt-4 mb-4">
          {/* <NavSearchClient /> */}
          <Separator className="h-1 mt-4" />
        </div>

        <ProductsContainerClient
          layout={layout}
          search={search}
          // getUserId={getUserId}
        />
      </div>
    </div>
  );
}
export default ProductsClientPage;
