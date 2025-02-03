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
import { ProductHF } from "@/utils";
// import { useAppDispatch } from "@/hooks/hooks";
import {
  // customFetch,
  // formatAsDollars,
  // type SingleProductResponse,
  // type CartItemHF,
  type CartItem,
  type CartItemST,
} from "@/utils";

import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import FormContainer from "@/components/form/FormContainer";
import FormInputDialog from "@/components/form/FormInputDialog";
import FormInputDialogValue from "@/components/form/FormInputDialogValue";
import TextAreaInputDialog from "@/components/form/TextAreaInputDialog";
import FormInputColorsDialog from "@/components/form/FormInputColorsDialog";
import ImageInput from "@/components/form/ImageInputDialog";
import PriceInput from "@/components/form/PriceInput";
import ImageInputDialog from "@/components/form/ImageInputDialog";
import PriceInputDialog from "@/components/form/PriceInputDialog";
import TextAreaInput from "@/components/form/TextAreaInput";
import { createProductAction, createProductActionUrl } from "@/utils/actions";
import { faker } from "@faker-js/faker";
import { StaticImageData } from "next/image";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { nanoid } from "nanoid";
import PriceInputDialogValue from "@/components/form/PriceInputDialogValue";
import {
  createAddProductActionUrl,
  createOrAddProductActionUrl,
} from "@/utils/actionsApi";
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
function ProductDialogListHF({
  // key,
  id,
  product,
}: {
  // key: string;
  id: string;
  product: ProductHF;
}) {
  const {
    image,
    contextualImageUrl,
    variants,
    typeName,
    name,
    price,
    imageAlt,
    url,
    categoryPath,
  } = product;

  // const { userId } = auth();
  const [isOpen, setIsOpen] = useState(false);
  const categoryName = categoryPath[1].name;
  const originId = product.id;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const productCurrentPrice = Math.ceil(price.currentPrice);
  const listPhotos: string[] = [];
  // const dictColorPrice = new Object();
  // const dictColorPrice:  Record<string, number> = new Object();
  const dictColorPrice: MyObject = new Object();

  const listColors: string[] = [];
  const listColorsCopy = [];

  const company = "Home Furnishings";

  const [amount, setAmount] = useState(1);
  const [descript, setDescript] = useState<string>();

  // const [colorsReady, setColorsReady] = useState(listColors);
  // const [productPhotos, setProductPhotos] = useState(listPhotos);
  const [productPhotos, setProductPhotos] = useState([image]);
  const [productPrice, setProductPrice] = useState<number>(productCurrentPrice);
  const [productPrices, setProductPrices] = useState<{ [key: string]: number }>(
    {}
  );
  const [productColors, setProductColors] = useState<string[]>(listColors);
  const [productColor, setProductColor] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | any>();
  const [dataTrans, setDataTrans] = useState<FileList | any>();
  // imageComingSoon
  // const productPrice = price.currentPrice;

  // const listDescript = ["unknown"];

  // mySet.add(product_color[0]);

  useEffect(() => {
    const product_color = image.split("__")[0].split("-").slice(-1)[0];
    // console.log("product_color: ", product_color);
    listColors.push(product_color);
    setProductColor(product_color);
  }, []);

  // async function scrapeData() {
  //   // async function scrapeData(): Promise<string | undefined> {
  //   try {
  //     const response = await fetch(url, {
  //       // async function scrapeData(url: string): Promise<string | undefined> {
  //       //   try {
  //       //     const response: Response = await fetch(url, {
  //       // cache: "no-store",
  //       method: "GET",
  //       headers: {
  //         "User-Agent":
  //           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  //         "Accept-Language": "en-US,en;q=0.9",
  //         "Accept-Encoding": "gzip, deflate, br",
  //         Accept:
  //           "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
  //         Connection: "keep-alive",
  //       },
  //     });

  //     const html = await response.text();
  //     const parser = new DOMParser();
  //     const doc = parser.parseFromString(html, "text/html");
  //     // console.log("doc: ", doc);
  //     const desc = doc.getElementsByClassName(
  //       "pip-product-summary__description"
  //     )[0];
  //     const desc_try = desc.textContent;

  //     if (desc_try !== null) setDescript(desc_try);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  //   useEffect(() => {
  //     scrapeData();
  // // }, [scrapeData]);
  //   }, []);

  // function addImageInput_() {
  //   const url =
  //     "https://www.ikea.com/us/en/images/products/poaeng-armchair-birch-veneer-gunnared-light-green__1192124_pe900869_s5.jpg";
  //   const name = url.split("/").slice(-1)[0];
  //   // const fileInput: any = document.querySelector('input[type="file"]');
  //   // const fileInput: HTMLInputElement | null = document.querySelector("#image");
  //   try {
  //     fetch(url)
  //       .then((res) => res.blob())
  //       .then((blob) => {
  //         const firstImage = new File([blob], name, {
  //           type: blob.type,
  //         });
  //         console.log("blob", blob);
  //         // readFile(blob)
  //         const dataTransfer = new DataTransfer();
  //         dataTransfer.items.add(firstImage);
  //         CreateInputFile(dataTransfer.files);
  //       });
  //   } catch (error) {
  //     console.log("error addImageInput: ", error);
  //   }
  // }

  useEffect(() => {
    const scrapeDataNew = async () => {
      // async function scrapeData(): Promise<string | undefined> {
      try {
        const response = await fetch(url, {
          // async function scrapeData(url: string): Promise<string | undefined> {
          //   try {
          //     const response: Response = await fetch(url, {
          // cache: "no-store",
          method: "GET",
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            Connection: "keep-alive",
          },
        });

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        // console.log("doc: ", doc);
        const desc = doc.getElementsByClassName(
          "pip-product-summary__description"
        )[0];
        const desc_try = desc.textContent;

        if (desc_try !== null) setDescript(desc_try);
      } catch (error) {
        console.log(error);
      }
    };
    scrapeDataNew();
    // }, [scrapeData]);
  }, [url]);

  const scrapeDataCallback = useCallback(() => {
    async function scrapeData() {
      // async function scrapeData(): Promise<string | undefined> {
      try {
        const response = await fetch(url, {
          // async function scrapeData(url: string): Promise<string | undefined> {
          //   try {
          //     const response: Response = await fetch(url, {
          // cache: "no-store",
          method: "GET",
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            Accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            Connection: "keep-alive",
          },
        });

        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        // console.log("doc: ", doc);
        const desc = doc.getElementsByClassName(
          "pip-product-summary__description"
        )[0];
        const desc_try = desc.textContent;

        if (desc_try !== null) setDescript(desc_try);
      } catch (error) {
        console.log(error);
      }
    }
  }, [url]);

  // useEffect(() => {
  //  scrapeDataCallback()
  // }, [scrapeDataCallback]);

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(parseInt(e.target.value));
  };

  // const cartProduct: CartItem = {
  //   // cartId: product.id + productColor || "unknown",
  //   cartId: product.id + `-${productColor}` || "-neutral",
  //   productId: product.id,
  //   image,
  //   title: `${typeName} ${name}`,
  //   price: String(productPrice * 100),
  //   company,
  //   productColor: productColor || "neutral",
  //   amount,
  // };

  // console.log("cartProduct: ", cartProduct);

  // const dispatch = useAppDispatch();

  // const addToCart = () => {
  //   // dispatch(addItem({product: cartProduct}));
  //   if (userId) {
  //     dispatch(addItem(cartProduct));
  //   }
  // };

  // const addToCart = () => {
  //   dispatch(addItem(cartProduct));
  // };

  useEffect(() => {
    // setProductPhotos([...productPhotos, contextualImageUrl])
    setProductPhotos([...productPhotos, contextualImageUrl]);

    listPhotos.push(image);
    listPhotos.push(contextualImageUrl);
    const mainColor = image.split("__")[0].split("-").slice(-1);
    // listColors.push(mainColor);
    dictColorPrice[mainColor[0]] = Math.ceil(price.currentPrice);
    if (variants) {
      // console.log("variants.length: ", variants.length);
      variants.forEach((variant) => {
        const {
          image,
          contextualImageUrl,
          price,
        }: {
          image: string;
          contextualImageUrl: string;
          price: Record<string, number>;
        } = variant;
        setProductPhotos([...productPhotos, image]);
        setProductPhotos([...productPhotos, contextualImageUrl]);
        listPhotos.push(image);
        listPhotos.push(contextualImageUrl);
        const colorUrl = image.split("__")[0].split("-").slice(-1)[0];
        listColorsCopy.push(colorUrl);
        dictColorPrice[colorUrl] = Math.ceil(price.currentPrice);
      });
    }

    setProductPrices(dictColorPrice);
    setProductColors(Object.keys(dictColorPrice));
  }, []);

  function open() {
    console.log("product: ", product);
    console.log("typeof product", typeof product);
    const fileInput: HTMLInputElement | null = document.querySelector("#image");
    // scrapeData();
    scrapeDataCallback();
    console.log("url: ", image);
    const nameImg = image.split("/").slice(-1)[0];
    console.log("nameImg: ", nameImg);
    try {
      fetch(image)
        .then((res) => res.blob())
        .then((blob) => {
          const firstImage = new File([blob], nameImg, {
            type: blob.type,
          });
          console.log("blob", blob);
          // readFile(blob)
          // // readFile(firstImage)
          // console.log('firstImage: ', firstImage);
          // console.log('firstImage.name: ', firstImage.name);
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(firstImage);
          // if (fileInput !== null) fileInput.files = dataTransfer.files;
          // if (dataTransfer.files !== null) {
          //   const dataTransferNew = dataTransfer.files;
          //   setDataTrans(dataTransferNew);
          //   if (inputRef.current !== null) {
          //     // const inputRefCurrentFiles: FileList =  inputRef.current.files
          //     inputRef.current.files = dataTrans;
          //   }
          // }

          if (inputRef.current) inputRef.current.files = dataTransfer.files;
        });
    } catch (error) {
      console.log("blob error: ", error);
    }
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
        className="rounded-md text-base lg:text-lg 2xl:text-xl mt-4 bg-cyan-600/60 hover:bg-cyan-600/80 py-1 px-4 font-medium text-red-600 focus:outline-none data-[hover]:bg-cyan-600/80 data-[focus]:outline-1 data-[focus]:outline-white mb-4 border-2 border-red-600/60 hover:border-red-600/80"
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
              className="w-full min-w-[90%] rounded-xl bg-muted/40 p-6 backdrop-blur-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
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
                {/* IMAGE */}
                {/* <img
              src={image}
              alt={imageAlt}
              className="w-full max-w-[540px] max-h-[36rem] object-cover rounded-lg lg:w-full border-2 border-slate-500/20"
            /> */}
                <div className="w-100% h-auto ml-[-28px] sm:mx-auto">
                  <SwiperProduct
                    spaceBetween={30}
                    centeredSlides={true}
                    // autoplay={{
                    //   delay: 5000,
                    //   disableOnInteraction: false,
                    // }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    // modules={[Autoplay, Pagination, Navigation]}
                    className=" w-[400px] max-w-[96%] h-[400px] max-h-[96%] sm:w-[32rem] sm:h-[32rem] xl:w-[34rem] xl:h-[34rem] bg-slate-700/60 p-4 space-x-4 b rounded-box"
                  >
                    {/* <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-slate-700 rounded-box "> */}
                    {productPhotos.map((photo, index) => {
                      return (
                        // <div key={image} className="carousel-item">
                        <div className="w-[100%]" key={nanoid()}>
                          <SwiperSlideProduct key={`${photo}-${index}-list`}>
                            {/* <SwiperSlide key={nanoid()}> */}
                            <img
                              alt={photo}
                              src={photo}
                              className="rounded-box object-cover max-h-[96%] h-[380px] max-w-[98%] w-[380px] sm:w-[98%] sm:h-[98%] mx-auto mt-1"
                            />
                          </SwiperSlideProduct>
                        </div>
                      );
                    })}
                    {/* </div> */}
                  </SwiperProduct>
                  {/* PRODUCT */}
                </div>
                <div>
                  <p className="text-xl lg:text-2xl 2xl:text-3xl font-semibold dark:font-medium mt-2">
                    {name}
                  </p>
                  <p className="text-lg lg:text-xl 2xl:text-2xl font-semibold dark:font-medium mt-2">
                    {imageAlt}
                  </p>
                  <p className="text-lg lg:text-xl 2xl:text-2xl font-semibold dark:font-medium mt-2 text-green-600">
                    {categoryName}
                  </p>
                  <p className="text-lg lg:text-xl 2xl:text-2xl text-info font-semibold dark:font-medium mt-2">
                    {company}
                  </p>
                  <p className="text-lg lg:text-xl 2xl:text-2xl font-bold dark:font-semibold mt-2">
                    {/* price: ${productPrice.toFixed(2)} */}
                    price: ${productPrice}.00
                  </p>
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
                  <p className="mt-4 text-base lg:text-lg 2xl:text-xl mr-4 min-[420px]:mr-2 leading-6 text-justify">
                    description:{" "}
                    {descript ||
                      "Very good quality product that is a good choice in its category"}
                  </p>
                  {/* COLORS */}
                  <div className="mt-3">
                    <p className="text-lg lg:text-xl 2xl:text-2xl font-semibold dark:font-medium tracking-wider">
                      colors
                    </p>
                    <div className="mt-2">
                      {/*  {productsColor.map((color) => { */}
                      {productColors.map((color, index) => {
                        // console.log("cartProduct: ", cartProduct);
                        return (
                          <span
                            key={`${color}-${index}`}
                            onClick={() => {
                              setProductColor(color);
                              setProductPrice(productPrices[color]);
                            }}
                            className="cursor-pointer border-2 rounded-md border-muted mr-2 hover:bg-muted-foreground/40"
                          >
                            <button
                              type="button"
                              style={{
                                backgroundColor: color || "transparent",
                                outline: "2px solid rgba(120, 120, 160, 0.4)",
                              }}
                              className={`badge rounded-[50%] p-1 w-5 h-5 sm:w-6 sm:h-6 xl:h-7 xl:w-7 3xl:w-8 3xl:h-8 mr-2 lg:mr-4 box-shadow-around-sm ${
                                color === productColor &&
                                "border-2 border-secondary"
                              }`}
                              value={color}
                              // onClick={handleColorClick}

                              // value={color}
                              // onClick={() => setProductColor(color || "DarkOrchid")}
                            ></button>
                            <span className="mb-2 mr-4 text-base xl:text-lg 3xl:text-xl">
                              {color}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  {/* AMOUNT */}
                  <div className="form-control w-full max-w-xs">
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
                  {/*
                  <div className="mt-10">
                    <button
                      className="btn btn-secondary btn-md"
                      onClick={addToCart}
                    >
                      Add to bag
                    </button>
                  </div> */}
                  <div className="">
                    <FormContainer
                      action={createOrAddProductActionUrl}
                      // action={createAddProductActionUrl}
                    >
                      <div className="hidden">
                        <div className="grid gap-4 md:grid-cols-2 my-4">
                          <FormInputDialog
                            type="text"
                            name="name"
                            label="product name"
                            defaultValue={name}
                            // value={name}
                          />
                          <FormInputDialog
                            type="text"
                            name="title"
                            label="product title"
                            defaultValue={imageAlt}
                            // value={name}
                          />
                          <FormInputDialog
                            type="text"
                            name="company"
                            label="company"
                            defaultValue={company}
                          />
                          <PriceInputDialogValue
                            // defaultValue={Math.ceil(productPrice)}
                            value={Math.ceil(productPrice)}
                            readOnly={true}
                          />
                          <input
                            id="image"
                            name="image"
                            type="file"
                            // required
                            accept="image/*"
                            // className="hidden"
                            ref={inputRef}
                          />
                          <FormInputDialogValue
                            type="text"
                            name="color"
                            label="product color"
                            // defaultValue={productColor}
                            value={productColor}
                            readOnly={true}
                          />
                          <FormInputDialogValue
                            type="number"
                            name="amount"
                            label="amount"
                            // defaultValue={productColor}
                            value={amount}
                            readOnly={true}
                          />
                          <FormInputDialog
                            type="text"
                            name="category"
                            label="product category"
                            defaultValue={categoryName}
                            // value={name}
                          />
                          <FormInputDialog
                            type="text"
                            name="type"
                            label="product type"
                            defaultValue={typeName || "product"}
                            // value={name}
                          />
                          <FormInputDialog
                            type="text"
                            name="originId"
                            label="product Id"
                            defaultValue={originId}
                            // value={name}
                          />
                          <FormInputDialog
                            type="text"
                            name="images"
                            label="images"
                            defaultValue={productPhotos.toString() || "unknown"}
                          />
                          <FormInputDialog
                            type="text"
                            name="colors"
                            label="colors"
                            defaultValue={productColors.toString() || "unknown"}
                          />
                          <FormInputDialog
                            type="text"
                            name="prices"
                            label="prices"
                            defaultValue={
                              JSON.stringify(productPrices) || "unknown"
                            }
                          />
                          {/* <FormInputDialog
                          type="number"
                          name="amount"
                          label="amount"
                          defaultValue={amount.toString() || "0"
                          }
                        />                         */}
                          <FormInputDialog
                            type="text"
                            name="description"
                            label="description"
                            defaultValue={
                              descript ||
                              "Very good quality product that is a good choice in its category"
                            }
                          />

                          {/* <ImageInputDialog defaultValue={image}/> */}
                        </div>
                        <TextAreaInputDialog
                          name="productJson"
                          defaultValue={JSON.stringify(product)}
                        />
                        <div className="mt-6">
                          <CheckboxInput name="featured" label="featured" />
                        </div>
                      </div>
                      <SubmitButton
                        text="add product"
                        className="mt-8 text-base md:text-lg"
                      />
                    </FormContainer>
                  </div>
                </div>
              </div>
              {/* </section> */}

              {/* <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Close
                </Button>
              </div> */}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
export default ProductDialogListHF;
