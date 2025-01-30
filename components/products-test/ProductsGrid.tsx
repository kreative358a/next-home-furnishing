/* eslint-disable @next/next/no-img-element */
import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/format";
// import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";
// import FavoriteToggleButtonPage from "./FavoriteToggleButtonPage";
import AddToCartTest from "./AddToCartTest";
import CartButtonDialogGrid from "./CartButtonDialogGrid";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="pt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
      {products.map((productGrid) => {
        const { name, price, image, company, color, category } = productGrid;

        const productIdGrid = productGrid.id;
        const dollarsAmount = formatCurrency(price);
        return (
          <article
            key={`${productIdGrid}-grid`}
            // className="card w-full shadow-xl hover:shadow-2xl transition duration-300 border-2 hover:border-2 border-blue-300/10 hover:border-blue-300/40 rounded-md bg-muted/80 hover:bg-muted/90"
            className="grid grid-cols-2 md:flex md:flex-col w-full shadow-xl hover:shadow-2xl transition duration-300 border-2 hover:border-2 border-blue-300/10 hover:border-blue-300/40 rounded-md bg-muted/80 hover:bg-muted/90"
          >
            <div className="absolute ml-[20px] mt-[20px] md:ml-[30px] md:mt-[30px]">
              <FavoriteToggleButton productId={productIdGrid} />
            </div>
            <Link href={`/products-server/${productIdGrid}`}>
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
            <div className="px-1 my-4 md:px-2 items-center text-center">
              <div className="w-full justify-center items-center flex flex-col gap-2 my-4">
                <AddToCartTest
                  productId={productIdGrid}
                  color={color}
                  price={price}
                  name={name}
                  image={image}
                />
                <CartButtonDialogGrid productId={productIdGrid} />
              </div>
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
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
