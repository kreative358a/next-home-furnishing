/* eslint-disable @next/next/no-img-element */
import BreadCrumbs from "@/components/single-product/BreadCrumbs";
// import { fetchSingleProduct, findExistingReview } from "@/utils/actions";
import {
  fetchSingleProduct,
  // fetchSingleProductUrl,
  // fetchSingleProductNew,
  findExistingReviewUrl,
} from "@/utils/actionsClient";
// import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
// import AddToCart from "@/components/single-product/AddToCart";
import AddToCartNew from "@/components/single-product/AddToCartNew";
import ProductRating from "@/components/single-product/ProductRating";
import ShareButton from "@/components/single-product/ShareButton";
import ShareButtonMobile from "@/components/single-product/ShareButtonMobile";
import { auth } from "@clerk/nextjs/server";
// lek 675
import SubmitReview from "@/components/reviews/SubmitReview";
// import ProductReviews from "@/components/reviews/ProductReviews";
// import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

async function SingleProductPage({
  params,
}: {
  params: { id: string; originId: string };
}) {
  const product = await fetchSingleProduct(params.originId);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  const { userId } = auth();
  console.log("params.id: ", params.id);
  console.log("params.originId: ", params.originId);
  // const user = await getAuthUser();
  const reviewDoesNotExist =
    userId && !(await findExistingReviewUrl(userId, product.id));

  console.log("reviewDoesNotExist: ", reviewDoesNotExist);

  return (
    <div className="productsContent px-0.5 sm:px-2 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2">
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
                <FavoriteToggleButton productId={product.id} />
                <ShareButton name={product.name} productId={product.id} />
                <ShareButtonMobile name={product.name} productId={product.id} />
              </div>
            </div>
            <ProductRating productId={product.id} />
            <h4 className="text-lg sm:text-xl text-info font-bold mt-2">
              {company}
            </h4>
            <p className="mt-3 text-lg sm:text-xl">{dollarsAmount}</p>
            <p className="mt-6 mr-4 min-[420px]:mr-2 leading-6 text-justify">
              {description}
            </p>
            {/* <AddToCart productId={product.id} /> */}
            <AddToCartNew productId={product.originId} />
            {reviewDoesNotExist && <SubmitReview productId={product.id} />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleProductPage;
