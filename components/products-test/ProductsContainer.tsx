import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProducts } from "@/utils/actionsTest";
import Link from "next/link";
import SectionTitle from "@/components/global/SectionTitle";
import { BsFillGridFill, BsList } from "react-icons/bs";

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : "";
  // const setActiveStyles = (pattern: string) => {
  //   return `text-base md:text-lg xl:text-xl btn btn-circle btn-sm sm:btn-md focus:border-none focus:outline-none box-shadow-around-sm-blue ${
  //     pattern === layout
  //       ? "btn-primary text-primary-content"
  //       : "btn-ghost text-based-content"
  //   }`;
  // };
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
                      // width: "32px",
                      // height: "32px",
                      width: "80%",
                      height: "80%",
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
          <ProductsGrid products={products} />
        ) : (
          // <ProductsList products={products} />
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
}
export default ProductsContainer;
