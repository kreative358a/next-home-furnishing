"use client";
import { Swiper as SwiperProduct } from "swiper/react";
import { SwiperSlide as SwiperSlideProduct } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
// import "./global-css.css";

export default function CarouselSwiper({
  productJson,
  productKey,
}: {
  productJson: string;
  productKey: string;
}) {
  const [listImages, setListImages] = useState<string[]>([]);

  useEffect(() => {
    function extractImageUrls(jsonString: string) {
      const data = JSON.parse(jsonString);
      const imageUrls: string[] = [];

      function findImages(obj: any): void {
        for (const key in obj) {
          if (key === "image" || key === "contextualImageUrl") {
            imageUrls.push(obj[key]);
          } else if (typeof obj[key] === "object" && obj[key] !== null) {
            findImages(obj[key]);
          }
        }
      }

      findImages(data);
      // return imageUrls;
      setListImages(imageUrls);
    }
    extractImageUrls(productJson);
  }, []);

  return (
    <div className="w-100% h-[100%] ml-[-28px] sm:mx-auto mb-2">
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
        className=" w-[400px] max-w-[96%] h-[400px] max-h-[96%] sm:w-[32rem] sm:h-[32rem] xl:w-[34rem] xl:h-[34rem] p-4 space-x-4 bg-slate-700 rounded-box"
      >
        {listImages.map((photo, index) => {
          return (
            // <div key={image} className="carousel-item">
            <div className="w-[100%]" key={nanoid()}>
              <SwiperSlideProduct key={`${productKey}-${index}`}>
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
      </SwiperProduct>
      {/* PRODUCT */}
    </div>
  );
}
