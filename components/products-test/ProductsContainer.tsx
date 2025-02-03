import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  fetchAllProducts,
  fetchProductsCount,
  fetchProductsAll,
} from "@/utils/actionsTest";
import Link from "next/link";
import SectionTitle from "@/components/global/SectionTitle";
import SectionTitleSmall from "@/components/global/SectionTitleSmall";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Pagination from "@/components/products-test/Pagination";
import PaginationContainer from "@/components/products-test/PaginationContainer";
import PaginationContainerTest from "@/components/products-test/PaginationContainerTest";

// PaginationContainer
// async function ProductsContainer({
//   layout,
//   search,
// }: {
//   layout: string;
//   search: string;
// }) {
//   const products = await fetchAllProducts({ search });
//   const totalProducts = products.length;
//   const searchTerm = search ? `&search=${search}` : "";

//   return (
//     <>
//       {/* HEADER */}
//       <section>
//         <div className="flex justify-between items-center">
//           <SectionTitle
//             text={
//               totalProducts > 1
//                 ? `${totalProducts} products`
//                 : `${totalProducts} product`
//             }
//           />
//           <div
//             className="bg-muted/60 shadow p-2 text-center rounded-md pt-4"
//           >
//             <div className="flex gap-x-4">
//               <Button
//                 variant={layout === "grid" ? "default" : "ghost"}
//                 size="icon"
//                 asChild
//                 className="rounded-full h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] md:h-[30px] md:w-[30px] lg:h-[36px] lg:w-[36px] 2xl:h-[40px] 2xl:w-[40px] "
//               >
//                 <Link href={`/products-test?layout=grid${searchTerm}`}>
//                   <LuLayoutGrid
//                     style={{
//                       width: "80%",
//                       height: "80%",
//                     }}
//                   />
//                   {/* <BsFillGridFill
//                     style={{
//                       width: "30px",
//                       height: "30px",
//                     }}
//                   /> */}
//                 </Link>
//               </Button>
//               <Button
//                 variant={layout === "list" ? "default" : "ghost"}
//                 size="icon"
//                 asChild
//                 className="rounded-full h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] md:h-[30px] md:w-[30px] lg:h-[36px] lg:w-[36px] 2xl:h-[40px] 2xl:w-[40px] "
//               >
//                 <Link href={`/products-test?layout=list${searchTerm}`}>
//                   <LuList
//                     style={{
//                       width: "80%",
//                       height: "80%",
//                     }}
//                   />
//                 </Link>
//               </Button>
//             </div>
//             <Separator className="h-1 mt-2" />
//           </div>
//         </div>
//         <Separator className="h-1 mt-4" />
//       </section>
//       {/* PRODUCTS */}
//       <div>
//         {totalProducts === 0 ? (
//           <h5 className="text-xl lg:text-2xl 2xl:text-3xl mt-16">
//             Sorry, no products matched your search...
//           </h5>
//         ) : layout === "grid" ? (
//           <ProductsGrid products={products} />
//         ) : (
//           <ProductsList products={products} />
//         )}
//       </div>
//     </>
//   );
// }
// export default ProductsContainer;

async function ProductsContainer({
  layout,
  search,
  page,
}: {
  layout: string;
  search: string;
  page: number;
}) {
  // const products = await fetchAllProducts({ search });
  const products = await fetchAllProducts({ page, search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  const productsCount = await fetchProductsCount({ search });
  const productsAll = await fetchProductsAll();
  // const totalProductsCount = productsCount.length;
  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex flex-col width-[360px] sm:w-auto max-[640px]:mx-auto sm:flex-row justify-between items-center mb-2">
          <SectionTitleSmall
            text={
              productsAll > 1
                ? `products all ${productsAll} `
                : `product all ${productsAll}`
            }
          />
          <SectionTitleSmall
            text={
              productsCount > 1
                ? `products search ${productsCount} `
                : `product search ${productsCount}`
            }
          />
          <SectionTitleSmall
            text={
              totalProducts > 1
                ? `products page ${totalProducts}`
                : `product page ${totalProducts} product`
            }
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="bg-muted/60 shadow p-2 text-center rounded-md pt-4">
            <div className="flex gap-x-4">
              <Button
                variant={layout === "grid" ? "default" : "ghost"}
                size="icon"
                asChild
                className="rounded-full h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] md:h-[30px] md:w-[30px] lg:h-[36px] lg:w-[36px] 2xl:h-[40px] 2xl:w-[40px] "
              >
                <Link href={`/products-test?layout=grid${searchTerm}`}>
                  <LuLayoutGrid
                    style={{
                      width: "80%",
                      height: "80%",
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
                className="rounded-full h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] md:h-[30px] md:w-[30px] lg:h-[36px] lg:w-[36px] 2xl:h-[40px] 2xl:w-[40px] "
              >
                <Link href={`/products-test?layout=list${searchTerm}`}>
                  <LuList
                    style={{
                      width: "80%",
                      height: "80%",
                    }}
                  />
                </Link>
              </Button>
            </div>
            <Separator className="h-1 mt-2" />
          </div>
        </div>
        <Separator className="h-1 mt-4" />
      </section>
      {/* PRODUCTS */}
      <PaginationContainer productsCount={productsCount} />
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-xl lg:text-2xl 2xl:text-3xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
      {/* <PaginationContainerTest productsCount={productsCount} /> */}
      <PaginationContainer productsCount={productsCount} />
      {/* <Pagination productsCount={productsCount} /> */}
    </>
  );
}
export default ProductsContainer;
