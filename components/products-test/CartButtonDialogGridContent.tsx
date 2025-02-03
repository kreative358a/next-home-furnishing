/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
// "use client"

import { auth } from "@clerk/nextjs/server";
import { fetchSingleProduct, findExistingReview } from "@/utils/actionsTest";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButtonDialogGrid from "./FavoriteToggleButtonDialogGrid";
import ProductRating from "@/components/single-product/ProductRating";
import CarouselSwiper from "@/components/global/CarouselSwiper";
import Link from "next/link";
// lek 675
// import SubmitReview from "@/components/reviews/SubmitReview";
import ProductAddDialogTest from "./ProductAddDialogTest";

async function CartButtonDialogGridContent({
  productId,
}: {
  productId: string;
}) {
  const productDialogGrid = await fetchSingleProduct(productId);

  const { name, image, company, price, title, category, type, productJson } =
    productDialogGrid;
  const dollarsAmount = formatCurrency(price);
  const { userId } = auth();
  const userIdGrid: string | null = userId;
  // const productIdGrid = productDialogList.id;
  // const reviewDoesNotExist =
  //   userId && !(await findExistingReview(userId, productIdGrid));

  return (
    <div
      // className="bg-scroll"
      className="dialog-content max-h-[700px]"
    >
      <div className="w-full min-w-[90%] p-2 md:p-6 md:pt-2 backdrop-blur-xl rounded-md">
        <div className="w-[100%] max-w[100%] mt-8 mb-4 grid gap-x-1 gap-y-1 sm:gap-y-8 lg:gap-x-8 lg:grid-cols-2 xl:gap-x-12 2xl:gap-x-16">
          <div>
            {/* IMAGE FIRST COL */}
            {productJson ? (
              <CarouselSwiper
                productJson={productJson}
                productKey={productDialogGrid.id}
              />
            ) : (
              <div className="w-100% h-auto ml-[-28px] sm:mx-auto">
                <div className=" w-[400px] max-w-[96%] h-[100%] max-h-[100%] sm:w-[32rem] lg:h-[32rem] xl:h-[34rem] p-4 space-x-4 bg-slate-700/60 rounded-box">
                  <div className="w-[100%] max-w-[1]">
                    <img
                      src={image}
                      alt={name}
                      className="rounded-box object-cover h-full max-w-[96%] w-[340px] sm:w-[100%] mx-auto"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* PRODUCT INFO SECOND COL */}
          <div>
            <div className="flex gap-x-8 items-center">
              <Link href={`/products-test/${productDialogGrid.id}`}>
                <p className="text-xl md:text-2xl xl:text-3xl font-semibold dark:font-medium mt-3">
                  {name}{" "}
                </p>
              </Link>
              {userIdGrid ? (
                <div className="flex items-center gap-x-2">
                  <FavoriteToggleButtonDialogGrid
                    productId={productDialogGrid.id}
                    userIdList={userIdGrid}
                  />
                  {/* <ShareButton name={product.name} productId={productId} />
                <ShareButtonMobile name={product.name} productId={productId} /> */}
                </div>
              ) : (
                <div className="flex items-center gap-x-2">
                  {/* <ShareButton name={product.name} productId={productId} />
                <ShareButtonMobile name={product.name} productId={productId} /> */}
                </div>
              )}
            </div>
            <ProductRating productId={productDialogGrid.id} />
            <p className="text-lg md:text-xl xl:text-2xl font-semibold dark:font-medium mt-2">
              {title}
            </p>
            <p className="text-lg md:text-xl xl:text-2xl font-semibold dark:font-medium mt-2 text-green-600 dark:text-green-400">
              category: {category} | type: {type};
            </p>
            <p className="text-lg sm:text-xl text-info font-bold mt-2">
              {company}
            </p>

            <ProductAddDialogTest
              id={productDialogGrid.id}
              product={productDialogGrid}
            />

            {/* {reviewDoesNotExist && <SubmitReview productId={productIdGrid} />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartButtonDialogGridContent;
