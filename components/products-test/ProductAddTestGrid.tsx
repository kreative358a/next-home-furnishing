/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addItem } from "@/features/cart/cartSlice";
// import { Swiper as SwiperProduct } from "swiper/react";
// import { SwiperSlide as SwiperSlideProduct } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { nanoid } from "nanoid";

import AddToCartTestAmount from "./AddToCartTestAmount";
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

function SingleProductAdd({
  id,
  //productId,
  product,
}: //userId,
{
  id: string;
  //productId: string;
  product: Product;
  //userId: string | null | undefined;
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
  } = product;
  const dollarsAmount = formatCurrency(price);
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

  return (
    <div
      id={id}
      // key={`${id}-list`}
    >
      <p className="text-lg md:text-xl xl:text-2xl font-bold dark:font-semibold mt-2">
        ${productPrice}.00
      </p>
      {/* PRODUCT INFO SECOND COL */}
      <p className="text-lg lg:text-xl 2xl:text-2xl font-semibold dark:font-medium mt-2">
        color:{" "}
        <span
          style={{ color: `${productColor || "blue"}` }}
          className="font-bold"
        >
          {" "}
          {productColor}
        </span>
      </p>
      <p className="mt-4 mr-4 min-[420px]:mr-2 text-base lg:text-lg 2xl:text-xl leading-6 text-justify">
        {description}
      </p>

      <div className="mt-3">
        {/* <p className="text-lg lg:text-xl 2xl:text-2xl font-semibold dark:font-medium tracking-wider">
                      prices: {prices} | price: {productPrice}
                    </p> */}
      </div>
      <div className="mt-3">
        <p className="text-lg lg:text-xl 3xl:text-2xl font-semibold dark:font-medium tracking-wider">
          colors
        </p>
        <div className="mt-2">
          {/*  {productsColor.map((color) => { */}
          {colors.split(",").map((color, index) => {
            // console.log("cartProduct: ", cartProduct);
            return (
              <span key={`${color}-${index}`}>
                <button
                  type="button"
                  style={{
                    backgroundColor: color || "transparent",
                    outline: "2px solid rgba(120, 120, 160, 0.4)",
                  }}
                  className={`badge p-1 w-4 h-4 lg:w-6 lg:h-6 3xl:w-8 3xl:h-8 mr-2 lg:mr-4 box-shadow-around-sm ${
                    color === color && "border-2 border-secondary"
                  }`}
                  value={color}
                  // onClick={handleColorClick}
                  onClick={() => {
                    setProductColor(color);
                    setProductPrice(JSON.parse(prices)[color]);
                  }}
                  // value={color}
                  // onClick={() => setProductColor(color || "DarkOrchid")}
                ></button>
                <span className="mb-2 mr-4 text-base lg:text-lg 2xl:text-xl">
                  {color}
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="form-control w-full max-w-xs flex flex-col">
          <label className="label" htmlFor="amount">
            <h4 className="text-md font-medium -tracking-wider capitalize">
              amount
            </h4>
          </label>
          <select
            className="select select-secondary select-bordered select-md bg-secondary/90"
            id="amount"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(10)}
          </select>
        </div>
      </div>
      <div className="ml-[48px] mt-[36px]">
        <AddToCartTestAmount
          name={name}
          image={image}
          productId={product.id}
          amountClient={amount}
          colorClient={productColor}
          priceClient={productPrice}
        />
        {/* {reviewDoesNotExist && <SubmitReview productId={product.id} />} */}
      </div>
    </div>
  );
}
export default SingleProductAdd;
