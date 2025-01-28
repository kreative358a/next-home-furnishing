import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@prisma/client";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";
import AddToCartClient from "./AddToCartClient";
import SingleProductDialogButtonServer from "./SingleProductDialogButtonServer";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { id, originId, name, price, image, company, color, category } =
          product;
        const dollarsAmount = formatCurrency(price);
        const productId = product.id;
        return (
          <article key={productId} className="group relative">
            <Card className="transform group-hover:shadow-xl transition-shadow group-hover:dark:shadow-slate-800 duration-500">
              <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                <Link href={`/products-server/${productId}`}>
                  <div className="relative h-64 md:h-48 md:w-48 transform group-hover:shadow-xl group-hover:shadow-slate-400/50 dark:group-hover:shadow-slate-800/50 group-hover:scale-105 transition-[transform shadow] duration-500">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
                      priority
                      className="w-full rounded object-cover"
                    />
                  </div>
                </Link>
                <div>
                  <p className="text-lg xl:text-xl font-semibold">{name}</p>
                  <p className="text-base xl:text-lg text-muted-foreground">
                    {company}
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
                  <p className="text-green-600 text-sm lg:text-base xl:text-lg bg-accent/60 px-2 rounded-sm">
                    category: {category}
                  </p>
                  <AddToCartClient productId={id} color={color} price={price} />
                </div>
                <p className="text-muted-foreground text-lg md:ml-auto">
                  {dollarsAmount}
                </p>
                <SingleProductDialogButtonServer productId={id} />
              </CardContent>
            </Card>

            <div className="absolute bottom-8 right-8 z-5">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsList;
