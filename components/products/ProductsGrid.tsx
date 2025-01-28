import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/format";
// import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
// import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";
// import FavoriteToggleButtonPage from "./FavoriteToggleButtonPage";
import AddToCartClient from "./AddToCartProduct";
import SingleProductDialogButtonProduct from "./SingleProductDialogButtonProduct";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="pt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
      {products.map((product) => {
        const { id, originId, name, price, image, company, color, category } =
          product;
        // const productId = product.id;
        const dollarsAmount = formatCurrency(price);
        return (
          <article
            key={id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300 border-2 hover:border-2 border-blue-300/10 hover:border-blue-300/40 rounded-md bg-muted/80 hover:bg-muted/90"
          >
            <Link href={`/products-server/${id}`}>
              <figure className="px-4 pt-4">
                <img
                  src={image}
                  alt={name}
                  className="rounded-xl h-auto w-full object-cover border-2 border-slate-500/20"
                />
              </figure>
            </Link>
            <div className="card-body items-center text-center mb-20">
              <p className="card-title tracking-wider">{name}</p>
              <p className=" text-base lg:text-lg xl:text-xl text-amber-500">
                company: {company}
              </p>
              <p className="text-base lg:text-lg xl:text-xl">
                color:{" "}
                <span
                  style={{ color: `${color || "blue"}` }}
                  className="font-medium"
                >
                  {" "}
                  {color}
                </span>
              </p>
              <span className="text-base lg:text-lg xl:text-xl dark:text-medium text-semibold">
                {dollarsAmount}
              </span>
              <span className="text-green-600 text-sm lg:text-base xl:text-lg bg-accent/60 px-2 rounded-sm">
                category: {category}
              </span>
            </div>

            <div className="absolute top-7 right-7 z-5">
              <FavoriteToggleButton productId={id} />
            </div>
            <div className="absolute w-full justify-center items-center flex flex-col gap-x-2 bottom-4 z-5 ml-[36px]">
              {/* <AddToCartUrl productId={product.id} /> */}

              <AddToCartClient productId={id} color={color} price={price} />
              <SingleProductDialogButtonProduct productId={id} />

              {/* <SingleProductDialog
                id={productId}
                product={product}
                productId={productId}
                userId={userId}
              /> */}
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
