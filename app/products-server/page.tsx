import NavSearch from "@/components/global/NavSearch";
import { Separator } from "@/components/ui/separator";
import ProductsContainer from "@/components/products-server/ProductsContainer";
import CarouselBackground from "@/components/products-server/CarouselBackground";

function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return (
    <div>
      <CarouselBackground />
      <div className="productsContent px-0.5 min-[490px]:px-1 sm:px-2 md:pl-4 md:pr-2 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2">
        <div className="text-primary bg-muted/60 shadow p-2 text-center rounded-md pt-4 mb-4">
          <NavSearch path="products-server" />
          <Separator className="h-1 mt-4" />
        </div>
        <ProductsContainer layout={layout} search={search} />
      </div>
    </div>
  );
}
export default ProductsPage;
