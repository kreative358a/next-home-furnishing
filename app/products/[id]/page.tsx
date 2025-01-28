/* eslint-disable @next/next/no-img-element */
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct, findExistingReview } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import ShareButton from "@/components/single-product/ShareButton";
import ShareButtonMobile from "@/components/single-product/ShareButtonMobile";
import { auth } from "@clerk/nextjs/server";
// lek 675
import SubmitReview from "@/components/reviews/SubmitReview";
import ProductReviews from "@/components/reviews/ProductReviews";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

// async function SingleProductPage({ params }: { params: { id: string } }) {
//   const product = await fetchSingleProduct(params.id);
//   const { name, image, company, description, price } = product;
//   const dollarsAmount = formatCurrency(price);
//   const { userId } = auth();

//   // const user = await getAuthUser();
//   const reviewDoesNotExist =
//     userId && !(await findExistingReview(userId, product.id));

//   return (
//     <div className="productsContent pt-4 pb-4 sm:pt-8 lg:mt-2">
//       <div className="bg-muted/60 p-4 rounded-md">
//         {userId ? <BreadCrumbs name={product.name} /> : null}

//         <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 border-2 p-6 rounded-md">
//           {/* IMAGE FIRST COL */}
//           <div
//             // className="relative h-full"
//             className="relative min-w-96 w-full mx-auto h-full min-h-96 rounded-md overflow-hidden "
//           >
//             <Image
//               src={image}
//               alt={name}
//               fill
//               sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
//               priority
//               className="w-full rounded-md object-contain"
//             />
//           </div>
//           {/* PRODUCT INFO SECOND COL */}
//           <div>
//             <div className="flex gap-x-8 items-center">
//               <h1 className="capitalize text-3xl font-bold">{name} </h1>
//               <div className="flex items-center gap-x-2">
//                 <FavoriteToggleButton productId={params.id} />
//                 <ShareButton name={product.name} productId={params.id} />
//                 <ShareButtonMobile name={product.name} productId={params.id} />
//               </div>
//             </div>
//             <ProductRating productId={params.id} />
//             <h4 className="text-xl mt-2">{company}</h4>
//             <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
//               {dollarsAmount}
//             </p>
//             <p className="mt-6 leading-8 text-muted-foreground text-justify">
//               {description}
//             </p>
//             <AddToCart productId={params.id} />
//           </div>
//         </div>
//         {/* my solution */}
//         {/* {userId ? (
//         <>
//           <ProductReviews productId={params.id} />
//           <SubmitReview productId={params.id} />
//         </>
//       ) : null} */}
//         {/*  */}
//         {/* <ProductReviews productId={params.id} />
//       <SubmitReview productId={params.id} /> */}
//         {reviewDoesNotExist && <SubmitReview productId={params.id} />}
//       </div>
//     </div>
//   );
// }
// export default SingleProductPage;

// import BreadCrumbs from '@/components/single-product/BreadCrumbs';
// import { fetchSingleProduct } from '@/utils/actions';
// import Image from 'next/image';
// import { formatCurrency } from '@/utils/format';
// import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
// import AddToCart from '@/components/single-product/AddToCart';
// import ProductRating from '@/components/single-product/ProductRating';

// async function SingleProductPage({ params }: { params: { id: string } }) {
//   const product = await fetchSingleProduct(params.id);
//   const { name, image, company, description, price } = product;
//   const dollarsAmount = formatCurrency(price);
//   return (
//     <section>
//       <BreadCrumbs name={product.name} />
//       {/*       <div className=' border-2 p-4 rounded-md mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'> */}
//       <div className='pb-4 mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
//         {/* IMAGE FIRST COL */}
//         <div className='relative mx-auto min-h-[320px] max-h-[480px] max-w-[640px] w-[90%] lg:w-full lg:h-full '>
//           <Image
//             src={image}
//             alt={name}
//             fill
//             sizes='(max-width:520px) 90vw, (max-width:680px) 70vw,(max-width:768px) 50vw,(max-width:1200px) 50vw,33vw'
//             priority
//             className='w-full h-full rounded-md object-cover'
//           />
//         </div>
//         {/* PRODUCT INFO SECOND COL */}
//         <div>
//           <div className='flex gap-x-8 items-center'>
//             <h1 className='capitalize text-3xl font-bold'>{name}</h1>
//             <FavoriteToggleButton productId={params.id} />
//           </div>
//           <ProductRating productId={params.id} />
//           <h4 className='text-xl mt-2'>{company}</h4>
//           <p className='mt-3 text-md bg-muted inline-block p-2 rounded-md'>
//             {dollarsAmount}
//           </p>
//           <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
//           <AddToCart productId={params.id} />
//         </div>
//       </div>
//     </section>
//   );
// }
// export default SingleProductPage;

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  const { userId } = auth();

  // const user = await getAuthUser();
  const reviewDoesNotExist =
    userId && !(await findExistingReview(userId, product.id));

  return (
    <div className="productsContent px-0.5 sm:px-2 pt-4 pb-4 lg:mt-2">
      <div className="w-full min-w-[90%] bg-muted/60 p-6 backdrop-blur-xl rounded-md">
        {userId ? <BreadCrumbs name={product.name} /> : null}

        <div className="w-[100%] max-w[100%] mt-8 mb-4 grid gap-x-1 gap-y-1 sm:gap-y-8 lg:gap-x-8 lg:grid-cols-2 xl:gap-x-12 2xl:gap-x-16">
          {/* IMAGE FIRST COL */}
          <div className="w-100% h-auto ml-[-28px] sm:mx-auto">
            <div className=" w-[400px] max-w-[96%] h-[100%] max-h-[100%] sm:w-[32rem] lg:h-[32rem] xl:h-[34rem] p-4 space-x-4 bg-slate-700 rounded-box">
              <div className="w-[100%]">
                <img
                  src={image}
                  alt={name}
                  className="rounded-box object-cover h-full max-w-[96%] w-[340px] sm:w-[100%] mx-auto"
                />
              </div>
            </div>
          </div>
          {/* PRODUCT INFO SECOND COL */}
          <div>
            <div className="flex gap-x-8 items-center">
              <h1 className="capitalize text-xl sm:text-2xl md-text-3xl font-bold mt-3">
                {name}{" "}
              </h1>
              <div className="flex items-center gap-x-2">
                <FavoriteToggleButton productId={params.id} />
                <ShareButton name={product.name} productId={params.id} />
                <ShareButtonMobile name={product.name} productId={params.id} />
              </div>
            </div>
            <ProductRating productId={params.id} />
            <h4 className="text-lg sm:text-xl text-info font-bold mt-2">
              {company}
            </h4>
            <p className="mt-3 text-lg sm:text-xl">{dollarsAmount}</p>
            <p className="mt-6 mr-4 min-[420px]:mr-2 leading-6 text-justify">
              {description}
            </p>
            <AddToCart productId={params.id} />
            {reviewDoesNotExist && <SubmitReview productId={params.id} />}
          </div>
        </div>
        {/* my solution */}
        {/* {userId ? (
        <>
          <ProductReviews productId={params.id} />
          <SubmitReview productId={params.id} />
        </>
      ) : null} */}
        {/*  */}
        {/* <ProductReviews productId={params.id} />
      <SubmitReview productId={params.id} /> */}
      </div>
    </div>
  );
}
export default SingleProductPage;
