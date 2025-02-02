import ProductsContainer from "@/components/products/ProductsContainer";
import NavSearch from "@/components/global/NavSearch";
import CarouselBackground from "@/components/products/CarouselBackground";
import { Separator } from "@/components/ui/separator";

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
      <div className="productsContent px-0.5 sm:px-2 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2">
        <div className="text-primary bg-muted/60 shadow p-2 text-center rounded-md pt-4 mb-4">
          <NavSearch path="products" />
          <Separator className="h-1 mt-4" />
        </div>
        <ProductsContainer layout={layout} search={search} />
      </div>
    </div>
  );
}
export default ProductsPage;
