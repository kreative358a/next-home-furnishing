import { useLoaderData } from "react-router-dom";
import ProductsGridHF from "./ProductsGridHF";
import ProductsListHF from "./ProductsListHF";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { ProductsResponseHF } from "@/utils";
import { type ProductHF } from "@/utils";
const layouts = {
  grid: "grid",
  list: "list",
};

const getLayoutFromLocalStorage = () => {
  return localStorage.getItem("layout") || layouts.grid;
};

function ProductsContainerHF({ products }: { products: ProductHF[] }) {
  // const products = useLoaderData() as ProductsResponseHF;
  const totalProducts = products.length;
  // console.log("totalProductsCont", totalProducts);
  const [layout, setLayout] = useState<string>(getLayoutFromLocalStorage);

  const setActiveStyles = (pattern: string) => {
    return `text-base md:text-lg xl:text-xl btn btn-circle btn-sm sm:btn-md focus:border-none focus:outline-none box-shadow-around-sm-blue ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  };

  const handleGrid = () => {
    setLayout("grid");
    localStorage.setItem("layout", "grid");
  };

  const handleList = () => {
    setLayout("list");
    localStorage.setItem("layout", "list");
  };

  return (
    <div className="pb-4">
      {/* HEADER */}

      <div className=" flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <div className="flex gap-x-2 bg-muted/80 p-4 rounded-md">
          <button
            type="button"
            onClick={handleGrid}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill className="h-[1.2em] w-[1.2em] sm:h-[2em] sm:w-[2em]" />
          </button>
          <button
            type="button"
            onClick={handleList}
            // onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList className="h-[1.2em] w-[1.2em] sm:h-[2em] sm:w-[2em]" />
          </button>
        </div>
      </div>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGridHF products={products} />
        ) : (
          // <ProductsGrid />
          <ProductsListHF products={products} />
        )}
      </div>
    </div>
  );
}
export default ProductsContainerHF;

// function ProductsContainerHF() {
//   const products = useLoaderData() as ProductsResponseHF;
//   const totalProducts = products.length;
//   console.log("totalProducts", totalProducts);

//   const [layout, setLayout] = useState<"grid" | "list">("grid");
//   return (
//     <>
//       {/* HEADER */}
//       <section>
//         <div className="flex justify-between items-center mt-8">
//           <h4 className="font-medium text-md">
//             {totalProducts} product{totalProducts > 1 && "s"}
//           </h4>
//           <div className="flex gap-x-4">
//             <Button
//               onClick={() => setLayout("grid")}
//               variant={layout === "grid" ? "default" : "ghost"}
//               size="icon"
//             >
//               <LayoutGrid />
//             </Button>
//             <Button
//               onClick={() => setLayout("list")}
//               variant={layout === "list" ? "default" : "ghost"}
//               size="icon"
//             >
//               <List />
//             </Button>
//           </div>
//         </div>
//         <Separator className="mt-4" />
//       </section>
//       {/* PRODUCTS */}
//       <div>
//         {totalProducts === 0 ? (
//           <h5 className="text-2xl mt-16">
//             Sorry, no products matched your search...
//           </h5>
//         ) : layout === "grid" ? (
//           <ProductsGridHF />
//         ) : (
//           <ProductsListHF />
//         )}
//       </div>
//     </>
//   );
// }
// export default ProductsContainerHF;
