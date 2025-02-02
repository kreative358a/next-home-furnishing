import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function LoadingContainer() {
  return (
    <div className="productsContent px-0.5 sm:px-2 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2">
      <div className="pt-48 grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
        <LoadingProduct />
      </div>
    </div>
  );
}

function LoadingProduct() {
  return (
    <div className="productsContent pt-[120px] sm:pt-[94px] pb-4 lg:mt-2">
      <Card>
        <CardContent className="p-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-3/4 mt-4" />
          <Skeleton className="h-4 w-1/2 mt-4" />
        </CardContent>
      </Card>
    </div>
  );
}
export default LoadingContainer;
