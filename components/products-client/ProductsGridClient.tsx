/* eslint-disable @next/next/no-img-element */
"use client";
import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
// import FavoriteToggleButton from "./FavoriteToggleButton";
import FavoriteToggleButtonClient from "./FavoriteToggleButtonClient";
import AddToCartClient from "./AddToCartClient";
import SingleProductDialog from "./SingleProductDialog";
// import { useAuth } from "@clerk/clerk-react";
import FavoriteToggleButton from "./FavoriteToggleButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useEffect } from "react";

function ProductsGridClient({
  products,
}: // getUserId,
{
  products: Product[];
  // getUserId: string;
}) {
  // const [getUserId, setGetUserId] = useState<string | null | undefined>();
  // const { userId } = useAuth();

  // useEffect(() => {
  //   // const { userId } = useAuth();
  //   setGetUserId(userId);
  // }, [userId]);
  return (
    <div className="pt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
      {products.map((product) => {
        const { id, name, price, image, company, color, category } = product;
        const productId = product.id;
        const dollarsAmount = formatCurrency(price);
        return (
          <article
            key={`${id}-grid`}
            // className="card w-full shadow-xl hover:shadow-2xl transition duration-300 border-2 hover:border-2 border-blue-300/10 hover:border-blue-300/40 rounded-md bg-muted/80 hover:bg-muted/90"
            className="grid grid-cols-2 md:flex md:flex-col w-full shadow-xl hover:shadow-2xl transition duration-300 border-2 hover:border-2 border-blue-300/10 hover:border-blue-300/40 rounded-md bg-muted/80 hover:bg-muted/90"
          >
            <div className="absolute ml-[20px] mt-[20px] md:ml-[30px] md:mt-[30px]">
              {/* <FavoriteToggleButtonClient productId={id} userId={getUserId} /> */}
              {/* <FavoriteToggleButton productId={id} /> */}
            </div>
            <Link href={`/products-server/${id}`}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <figure className="px-4 pt-4">
                      <img
                        src={image}
                        alt={name}
                        className="rounded-md md:rounded-xl h-auto w-full object-cover border-2 border-slate-500/20"
                      />
                    </figure>
                  </TooltipTrigger>
                  <TooltipContent className="bg-muted/80">
                    <p className="text-muted-foreground text-base">
                      click link
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <div className="px-1 mt-4 md:px-2 items-center text-center">
              <p className="text-lg lg:text-xl xl:text-2xl tracking-wider">
                {name}
              </p>
              <p className=" text-base lg:text-lg xl:text-xl text-amber-500 mt-1">
                company: {company}
              </p>
              <p className="text-base lg:text-lg xl:text-xl mt-1">
                color:{" "}
                <span
                  style={{ color: `${color || "blue"}` }}
                  className="font-medium"
                >
                  {" "}
                  {color}
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-xl dark:text-medium text-semibold mt-1">
                {dollarsAmount}
              </p>
              <p className="text-green-600 text-sm lg:text-base xl:text-lg bg-accent/60 px-2 rounded-sm mt-1">
                category: {category}
              </p>

              <div className="w-full justify-center items-center flex flex-col gap-2 my-4">
                <AddToCartClient productId={id} color={color} price={price} />
                <SingleProductDialog
                  id={productId}
                  product={product}
                  productId={productId}
                  // userId={getUserId}
                />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsGridClient;
