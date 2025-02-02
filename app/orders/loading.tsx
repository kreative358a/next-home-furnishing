"use client";

import LoadingTable from "@/components/global/LoadingTable";

function loading() {
  return (
    <div className="productsContent px-0.5 sm:px-2 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2">
      <LoadingTable />
    </div>
  );
}
export default loading;
