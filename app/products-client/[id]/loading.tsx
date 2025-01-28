"use client";

// import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <div className="productsContent px-0.5 sm:px-2 pt-4 pb-4 lg:mt-2">
      <section className="grid gap-8 mt-4">
        <ReviewLoadingSingleProduct />
      </section>
    </div>
  );
}

const ReviewLoadingSingleProduct = () => {
  return (
    <div className="flex items-center space-x-4 w-full border-2 rounded-md p-6">
      <Skeleton className="h-96 w-[50%]" />
      <div className="grid grid-col w-[50%]">
        <Skeleton className="h-32 min-w-[50%] top-0 my-6" />
        <Skeleton className="h-4 w-[50%]" />
      </div>
    </div>
    // <Card>
    //   <CardHeader>
    //     <div className='flex items-center'>
    //       <Skeleton className='w-[50%] h-full rounded-full' />
    //       <div className='ml-4'>
    //         <Skeleton className='w-[50%] h-4 mb-2' />
    //         <Skeleton className='w-[50%] h-4 ' />
    //       </div>
    //     </div>
    //   </CardHeader>
    // </Card>
  );
};

export default loading;
