import NavSearchTest from "@/components/global/NavSearchTest";
import { Separator } from "@/components/ui/separator";
import ProductsContainer from "@/components/products-test/ProductsContainer";
import CarouselBackground from "@/components/products-test/CarouselBackground";
import Pagination from "@/components/products-test/Pagination";

// function ProductsPage({
//   searchParams,
// }: {
//   searchParams: { layout?: string; search?: string };
// }) {
//   const layout = searchParams.layout || "grid";
//   const search = searchParams.search || "";

//   return (
//     <div>
//       <CarouselBackground />
//       <div className="productsContent px-0.5 min-[490px]:px-1 sm:px-2 md:pl-4 md:pr-2 pt-4 pb-4 lg:mt-2">
//         <div className="text-primary bg-muted/60 shadow p-2 text-center rounded-md pt-4 mb-4">
//           <NavSearch path="products-server" />
//           <Separator className="h-1 mt-4" />
//         </div>
//         <ProductsContainer layout={layout} search={search} />
//       </div>
//     </div>
//   );
// }
// export default ProductsPage;

function ProductsPageTest({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string; page?: number };
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";
  const page = searchParams.page || 1;

  return (
    <div>
      <CarouselBackground />
      <div className="productsContent px-0.5 min-[490px]:px-1 sm:px-2 md:pl-4 md:pr-2 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2">
        <div className="text-primary bg-muted/60 shadow p-2 text-center rounded-md pt-4 mb-4">
          <NavSearchTest path="products-test" />
          <Separator className="h-1 mt-4" />
        </div>
        <ProductsContainer layout={layout} search={search} page={page} />
      </div>
    </div>
  );
}
export default ProductsPageTest;
