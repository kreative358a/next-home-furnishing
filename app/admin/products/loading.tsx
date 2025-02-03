"use client";

import LoadingTable from "@/components/global/LoadingTable";
import SectionTitle from "@/components/global/SectionTitle";
function loading() {
  return (
    <div className="mb-4 productsContent px-0.5 sm:px-2 lg:px-4 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2 ">
      <div className="bg-muted/60 p-4 rounded-md">
        <SectionTitle text="Dashboard" />
        <LoadingTable />
      </div>
    </div>
  );
}
export default loading;
