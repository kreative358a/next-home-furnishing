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
import { usePathname } from "next/navigation";

import { nanoid } from "nanoid";

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

function ProductAddDialogTest({
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
              <span
                key={`${color}-${index}`}
                onClick={() => {
                  setProductColor(color);
                  setProductPrice(JSON.parse(prices)[color]);
                }}
                className="border-2 rounded-md border-muted mr-2 hover:bg-muted-foreground/40"
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: color || "transparent",
                    outline: "2px solid rgba(120, 120, 160, 0.4)",
                  }}
                  className={`badge rounded-[50%] p-1 w-5 h-5 sm:w-6 sm:h-6 xl:h-7 xl:w-7 3xl:w-8 3xl:h-8 mr-2 lg:mr-4 box-shadow-around-sm ${
                    color === color && "border-2 border-secondary"
                  }`}
                  value={color}
                  // onClick={handleColorClick}

                  // value={color}
                  // onClick={() => setProductColor(color || "DarkOrchid")}
                ></button>
                <span className="mb-2 mr-4 text-base xl:text-lg 2xl:text-xl">
                  {color}
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <div className="ml-[48px] mt-[36px]">
        {/* {reviewDoesNotExist && <SubmitReview productId={product.id} />} */}
      </div>
    </div>
  );
}
export default ProductAddDialogTest;
