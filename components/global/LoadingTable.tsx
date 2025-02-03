import { Skeleton } from "../ui/skeleton";

function LoadingTable({ rows = 5 }: { rows?: number }) {
  const tableRows = Array.from({ length: rows }, (_, index) => {
    return (
      <div
        className="mb-4 productsContent px-0.5 sm:px-2 lg:p-4 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2 "
        key={index}
      >
        <Skeleton className="w-full h-8 rounded" />
      </div>
    );
  });
  return <>{tableRows}</>;
}
export default LoadingTable;
