"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <div className="productsContent px-0.5 sm:px-2 pt-4 pb-4 lg:mt-2">
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
        <ReviewLoadingCard />
        <ReviewLoadingCard />
        <ReviewLoadingCard />
      </section>
    </div>
  );
}

const ReviewLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <Skeleton className="w-[150px] h-4 mb-2" />
            <Skeleton className="w-[150px] h-4 " />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default loading;
