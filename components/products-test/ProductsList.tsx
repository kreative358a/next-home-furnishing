import { formatCurrency } from "@/utils/format";
import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@prisma/client";
// import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";
import AddToCartTest from "./AddToCartTest";
import CartButtonDialogList from "./CartButtonDialogList";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div
      // className="mt-12 grid gap-y-8"
      className="md:px-2 py-4 sm:p-4 2xl:p-6 grid gap-y-2 sm:gap-y-4"
    >
      {products.map((product) => {
        const { name, price, image, company, color, category } = product;
        const dollarsAmount = formatCurrency(price);
        const productId = product.id;
        const productIdList = product.id;
        return (
          <div
            key={`${productIdList}-list`}
            // key={nanoid()}
            // key={id}
            // to={`/products-hf/${item.id}`}
            className="p-4 rounded-md flex flex-col sm:flex-row gap-y-4 flex-wrap  bg-secondary/70 shadow-xl hover:shadow-2xl duration-300 group border-2 hover:border-2 border-blue-300/10 hover:border-blue-300/40 hover:bg-secondary/80"
          >
            <div className="flex flex-row">
              <Link href={`/products-test/${productIdList}`}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img
                        src={image}
                        alt={name}
                        className="h-[10rem] w-[10rem] min-h-[10rem] min-w-[10rem] sm:h-[10rem] sm:w-[10rem] rounded-lg md:h-[12rem] md:w-[12rem] object-cover group-hover:scale-105 transition duration-300 border-2 border-slate-500/20"
                      />
                    </TooltipTrigger>
                    <TooltipContent className="bg-muted/80">
                      <p className="text-muted-foreground text-base">
                        click link
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16">
                <p className="text-lg xl:text-xl font-semibold">{name}</p>
                <p className="text-base xl:text-lg text-muted-foreground md:mt-1">
                  {company}
                </p>
                <p className="text-green-600 text-base xl:text-lg md:mt-1">
                  category: {category}
                </p>
                <p className="text-base lg:text-lg xl:text-xl md:mt-1">
                  color:{" "}
                  <span
                    style={{ color: `${color || "blue"}` }}
                    className="font-medium"
                  >
                    {" "}
                    {color}
                  </span>
                </p>

                <div className="mt-2 sm:mt-4">
                  <AddToCartTest
                    productId={productIdList}
                    color={color}
                    price={price}
                    name={name}
                    image={image}
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto items-center justify-between md:ml-auto flex flex-row md:flex-col">
              <div className="md:ml-[52px] ">
                <FavoriteToggleButton productId={productIdList} />
              </div>
              <p className="text-muted-foreground text-lg  ">{dollarsAmount}</p>
              <div className="mt-[-6px] md:mt-[40px]">
                <CartButtonDialogList productId={productIdList} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ProductsList;
