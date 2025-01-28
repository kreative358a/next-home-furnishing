"use client";
import ProductsGridClient from "./ProductsGridClient";
// import ProductsList from "./ProductsList";
import ProductsListClient from "./ProductsListClient";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actionsClient";
import Link from "next/link";
import SectionTitle from "@/components/global/SectionTitle";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useState, useEffect } from "react";
// import { Product } from "@/utils/types"
import { Product } from "@prisma/client";
import { fetchUserFavorites } from "@/utils/actionsClient";

// async function ProductsContainer({
//   layout,
//   search,
// }: {
//   layout: string;
//   search: string;
// }) {
//   const products = await fetchAllProducts({ search });
//   const totalProducts = products.length;
//   const searchTerm = search ? `&search=${search}` : '';
//   return (
//     <>
//       {/* HEADER */}
//       <section>
//         <div className='flex justify-between items-center'>
//           <h4 className='font-medium text-lg'>
//             {totalProducts} product{totalProducts > 1 && 's'}
//           </h4>
//           <div className='flex gap-x-4'>
//             <Button
//               variant={layout === 'grid' ? 'default' : 'ghost'}
//               size='icon'
//               asChild
//             >
//               <Link href={`/products?layout=grid${searchTerm}`}>
//                 <LuLayoutGrid />
//               </Link>
//             </Button>
//             <Button
//               variant={layout === 'list' ? 'default' : 'ghost'}
//               size='icon'
//               asChild
//             >
//               <Link href={`/products?layout=list${searchTerm}`}>
//                 <LuList />
//               </Link>
//             </Button>
//           </div>
//         </div>
//         <Separator className='mt-4' />
//       </section>
//       {/* PRODUCTS */}
//       <div>
//         {totalProducts === 0 ? (
//           <h5 className='text-2xl mt-16'>
//             Sorry, no products matched your search...
//           </h5>
//         ) : layout === 'grid' ? (
//           <ProductsGrid products={products} />
//         ) : (
//           <ProductsList products={products} />
//         )}
//       </div>
//     </>
//   );
// }
// export default ProductsContainer;

function ProductsContainerClient({
  layout,
  search,
}: // getUserId,
{
  layout: string;
  search: string;
  // getUserId: string;
}) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsAsync = async () => {
      const productsAll = new Set([
        (await fetchUserFavorites()) && (await fetchAllProducts({ search })),
      ]);
      const favorites = await fetchUserFavorites();
      const productsAwait = await fetchAllProducts({ search });

      setProducts(productsAwait);
    };
    productsAsync();
  }, []);

  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  const setActiveStyles = (pattern: string) => {
    return `text-base md:text-lg xl:text-xl btn btn-circle btn-sm sm:btn-md focus:border-none focus:outline-none box-shadow-around-sm-blue ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  };
  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center">
          {/* <h4 className='font-medium text-lg'>
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4> */}
          <SectionTitle
            text={
              totalProducts > 1
                ? `${totalProducts} products`
                : `${totalProducts} product`
            }
          />
          <div
            className="bg-muted/60 shadow p-2 text-center rounded-md pt-4"
            // className="flex gap-x-4"
          >
            <div className="flex gap-x-4">
              <Button
                variant={layout === "grid" ? "default" : "ghost"}
                size="icon"
                asChild
                className="rounded-full h-[40px] w-[40px]"
              >
                <Link href={`/products-client?layout=grid${searchTerm}`}>
                  <LuLayoutGrid
                    style={{
                      width: "32px",
                      height: "32px",
                    }}
                  />
                  {/* <BsFillGridFill
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  /> */}
                </Link>
              </Button>
              <Button
                variant={layout === "list" ? "default" : "ghost"}
                size="icon"
                asChild
                className="rounded-full h-[40px] w-[40px]"
              >
                <Link href={`/products-client?layout=list${searchTerm}`}>
                  <LuList
                    style={{
                      width: "32px",
                      height: "32px",
                    }}
                  />
                  {/* <BsList
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                  /> */}
                </Link>
              </Button>
            </div>
            <Separator className="h-1 mt-2" />
          </div>
        </div>
        <Separator className="h-1 mt-4" />
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-xl lg:text-2xl 2xl:text-3xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGridClient
            products={products}
            // getUserId={getUserId}
          />
        ) : (
          <ProductsGridClient
            products={products}
            // getUserId={getUserId}
          />
          // <ProductsListClient
          //   products={products}
          //   getUserId={getUserId}
          // />
        )}
      </div>
    </>
  );
}
export default ProductsContainerClient;
