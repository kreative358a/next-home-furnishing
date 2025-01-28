/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
// import { useDispatch } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { useAppDispatch } from "@/hooks/hooks";
// import {
//   // customFetch,
//   // formatAsDollars,
//   // type SingleProductResponse,
//   // type CartItemHF,
//   type CartItem,
//   type CartItemST,
// } from "@/utils";
// import { auth } from "@clerk/nextjs/server";
// import { useAuth } from "@clerk/clerk-react";

import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import { nanoid } from "nanoid";

// import FavoriteToggleButton from "../products/FavoriteToggleButton";
// import SubmitReview from "../reviews/SubmitReview";
// import AddToCartNew from "../single-product/AddToCartNew";
// import ProductRating from "../single-product/ProductRating";
// import ProductRatingClient from "../single-product/ProductRatingClient";
// import ShareButton from "../single-product/ShareButton";
// import ShareButtonMobile from "../single-product/ShareButtonMobile";
import { ProductCartProps } from "./CartItemColumns";

import { formatCurrency } from "@/utils/format";
import { Product } from "@prisma/client";

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

function SingleProductDialogCart({
  productCart,
  price,
  color,
  id,
}: {
  productCart: ProductCartProps;
  price: number;
  color: string;
  id: string;
}) {
  const { name, image, company, description, category, type, title } =
    productCart;
  const dollarsAmount = formatCurrency(price);

  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <div
      id={id}
      // key={`${id}-list`}
    >
      <Button
        onClick={open}
        className="rounded-md mt-2 bg-secondary/40 py-1 px-4 text-base md:text-lg font-medium text-red-600 focus:outline-none data-[hover]:bg-secondary/60 data-[focus]:outline-1 data-[focus]:outline-white border-2 border-blue-600/50 hover:border-blue-600/80 ml-[-48px]"
      >
        details
      </Button>
      <Dialog
        open={isOpen}
        as="div"
        // className="relative z-20 focus:outline-none"
        onClose={close}
        style={{ zIndex: 70, position: "fixed" }}
      >
        <div
          className="inset-0 w-screen overflow-y-auto"
          // className="fixed z-20 pt-[80px] inset-0 w-screen overflow-y-auto"
          style={{ position: "fixed", zIndex: 71 }}
        >
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full min-w-[90%] rounded-xl p-6 backdrop-blur-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 bg-muted/40 hover:bg-muted/60"
            >
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
                <div className="w-100% h-auto  mx-auto sm:mx-auto">
                  <div className=" w-[400px] max-w-[96%] h-[100%] max-h-[100%] sm:w-[32rem] lg:h-[32rem] xl:h-[34rem] p-4 space-x-4 bg-slate-700 rounded-box">
                    <div className="w-[100%]">
                      <img
                        src={image}
                        alt={title}
                        className="rounded-box object-cover h-full max-w-[96%] w-[340px] sm:w-[100%] mx-auto"
                      />
                    </div>
                  </div>
                </div>
                {/* PRODUCT INFO SECOND COL */}
                <div>
                  <div className="flex gap-x-8 items-center">
                    <p className="text-xl md:text-2xl xl:text-3xl font-semibold dark:font-medium mt-2">
                      {name}
                    </p>
                  </div>
                  <p className="text-lg md:text-xl xl:text-2xl font-semibold dark:font-medium mt-2">
                    {title}
                  </p>
                  <p className="text-lg md:text-xl xl:text-2xl font-semibold dark:font-medium mt-2 text-green-600">
                    category: {category} | type: {type};
                  </p>
                  <p className="text-lg md:text-xl xl:text-2xl text-info font-semibold dark:font-medium mt-2">
                    {company}
                  </p>
                  <p className="text-lg md:text-xl xl:text-2xl font-bold dark:font-semibold mt-2">
                    {dollarsAmount}
                  </p>

                  <p className="mt-4 mr-4 min-[420px]:mr-2 text-base lg:text-lg 2xl:text-xl leading-6 text-justify">
                    {description}
                  </p>
                  <h4 className="text-[16px] xl:text-[20px]">
                    color:{" "}
                    <span
                      style={{ color: `${color || "blue"}` }}
                      className="font-medium"
                    >
                      {" "}
                      {color}
                    </span>
                  </h4>

                  <div className="mt-3">
                    <p className="text-lg lg:text-xl 2xl:text-2xl font-semibold dark:font-medium tracking-wider">
                      colors
                    </p>
                    <div className="mt-2"></div>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label" htmlFor="amount">
                      <h4 className="text-md font-medium -tracking-wider capitalize">
                        amount
                      </h4>
                    </label>
                  </div>
                  {/* <AddToCart productId={product.id} />  reviewNotExist*/}
                  <div className="ml-[48px] mt-[36px]">
                    {/* {reviewNotExist && <SubmitReview productId={product.id} />} */}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
export default SingleProductDialogCart;
