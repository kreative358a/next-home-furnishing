/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import imageComingSoon from "@/public/image_coming_soon.png";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState, useEffect, useRef, useCallback } from "react";
// import { useDispatch } from "react-redux";
import { addItem } from "@/features/cart/cartSlice";
import { Swiper as SwiperProduct } from "swiper/react";
import { SwiperSlide as SwiperSlideProduct } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useAppDispatch } from "@/hooks/hooks";
import {
  // customFetch,
  // formatAsDollars,
  // type SingleProductResponse,
  // type CartItemHF,
  type CartItem,
  type CartItemST,
} from "@/utils";
// import { auth } from "@clerk/nextjs/server";
import { useAuth } from "@clerk/clerk-react";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { nanoid } from "nanoid";
import Link from "next/link";

import FavoriteToggleButton from "./FavoriteToggleButton";
// import FavoriteToggleButtonClient from "./FavoriteToggleButtonClient";
import SubmitReviewClient from "../reviews/SubmitReviewClient";
import AddToCartNew from "../single-product/AddToCartNew";
// import ProductRating from "../single-product/ProductRating";
import ProductRatingClient from "../single-product/ProductRatingClient";
import ShareButton from "../single-product/ShareButton";
import ShareButtonMobile from "../single-product/ShareButtonMobile";
import AddToCartClientAmount from "./AddToCartClientAmount";
import {
  fetchSingleProduct,
  fetchSingleProductUrl,
  fetchSingleProductNew,
  findExistingReviewUrl,
} from "@/utils/actionsClient";
import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";
import CarouselSwiper from "@/components/global/CarouselSwiper";
import SingleProductAdd from "./SingleProductAdd";
// import { auth } from "@clerk/nextjs/server";
// const generateAmountOptions = (number: number) => {
//   return Array.from({ length: number }, (_, index) => {
//     const amount = index + 1;
//     return (
//       <option key={amount} value={amount}>
//         {amount}
//       </option>
//     );
//   });
// };

function generateAmountOptions(number: number) {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
}

interface MyObject {
  [k: string]: any;
}

// const ProductDialogHF = ({
//   key,
//   id,
//   product,
// }: {
//   key: string;
//   id: string;
//   product: ProductHF;
// }) => {
function SingleProductDialog({
  id,
  productId,
  product,
}: // userId,
{
  id: string;
  productId: string;
  product: Product;
  // userId: string;
}) {
  const {
    name,
    image,
    company,
    description,
    price,
    prices,
    color,
    category,
    type,
    title,
    colors,
    productJson,
  } = product;
  const dollarsAmount = formatCurrency(price);
  // const { userId } = auth();
  const { userId } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [reviewNotExist, setReviewNotExist] = useState<boolean | "" | null>();
  const [amount, setAmount] = useState(1);
  const [productColor, setProductColor] = useState<string>(color);
  const [productPrice, setProductPrice] = useState<number>(price);
  // const user = await getAuthUser();

  //   useEffect(() => {
  //     reviewExisting();
  //   }, []);

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(parseInt(e.target.value));
  };

  function open() {
    const reviewExisting = async () => {
      const reviewDoesNotExist =
        userId && !(await findExistingReviewUrl(userId, product.id));
      if (reviewDoesNotExist) setReviewNotExist(reviewDoesNotExist);
    };
    reviewExisting();
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  //   const cartProduct: CartItem = {
  //     // cartID: product.id + productColor || "unknown",
  //     cartId: product.id + `-${color}` || "-neutral",
  //     productId: product.id,
  //     image,
  //     title: `${type} ${name}`,
  //     price: price * 100,
  //     company,
  //     productColor: color || "neutral",
  //     amount: amount || 1,
  //   };

  //   const dispatch = useAppDispatch();

  //   const addToCart = () => {
  //     // dispatch(addItem({product: cartProduct}));
  //     dispatch(addItem(cartProduct));
  //   };
  return (
    <div
      id={id}
      // key={`${id}-list`}
    >
      <Button
        onClick={open}
        className="rounded-md mt-2 bg-secondary/40 py-1 px-4 text-base md:text-lg font-medium text-red-600 focus:outline-none data-[hover]:bg-secondary/60 data-[focus]:outline-1 data-[focus]:outline-white border-2 border-blue-600/50 hover:border-blue-600/80 ml-[-48px]"
      >
        Content
      </Button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed pt-[100px] inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full min-w-[90%] rounded-xl p-6 backdrop-blur-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 bg-muted/40 hover:bg-muted/60"
            >
              {" "}
              <div className="mt-2">
                <Button
                  className="absolute right-4 top-4 inline-flex items-center rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Close
                </Button>
              </div>
              {/* <section> */}
              <div className="w-[100%] max-w[100%] mt-8 mb-4 grid gap-x-1 gap-y-1 sm:gap-y-8 lg:gap-x-8 lg:grid-cols-2 xl:gap-x-12 2xl:gap-x-16">
                {/* IMAGE FIRST COL */}
                {productJson ? (
                  <CarouselSwiper productJson={productJson} productKey={id} />
                ) : (
                  <div className="w-100% h-auto ml-[-28px] sm:mx-auto">
                    <div className=" w-[400px] max-w-[96%] h-[100%] max-h-[100%] sm:w-[32rem] lg:h-[32rem] xl:h-[34rem] p-4 space-x-4 bg-slate-700/60 rounded-box">
                      <div className="w-[100%]">
                        <img
                          src={image}
                          alt={name}
                          className="rounded-box object-cover h-full max-w-[96%] w-[340px] sm:w-[100%] mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {/* PRODUCT INFO SECOND COL */}
                <div>
                  <div className="flex gap-x-8 items-center">
                    <Link href={`/products-client/${id}`}>
                      <p className="text-xl md:text-2xl xl:text-3xl font-semibold dark:font-medium mt-2">
                        {name}
                      </p>
                    </Link>
                    <div className="flex items-center gap-x-2">
                      {/* <FavoriteToggleButtonClient
                        productId={product.id}
                        userId={userId}
                      /> */}
                      {/* <FavoriteToggleButton productId={product.id} /> */}
                    </div>
                  </div>
                  <ProductRatingClient productId={product.id} />
                  <p className="text-lg md:text-xl xl:text-2xl font-semibold dark:font-medium mt-2">
                    {title}
                  </p>
                  <p className="text-lg md:text-xl xl:text-2xl font-semibold dark:font-medium mt-2 text-green-600 dark:text-green-400">
                    category: {category} | type: {type};
                  </p>
                  <p className="text-lg md:text-xl xl:text-2xl text-info font-semibold dark:font-medium mt-2">
                    {company}
                  </p>

                  <SingleProductAdd id={productId} product={product} />
                  {/* <AddToCart productId={product.id} />  reviewNotExist*/}
                  {reviewNotExist && (
                    <SubmitReviewClient productId={product.id} />
                  )}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
export default SingleProductDialog;
