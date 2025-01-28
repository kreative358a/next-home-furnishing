"use client";
import hero1w from "@/public/images/hero1w.webp";
import hero22w from "@/public/images/hero22w.webp";
import hero3w from "@/public/images/hero3w.webp";
import hero4w from "@/public/images/hero4w.webp";
import hero25w from "@/public/images/hero25w.webp";
import hero6w from "@/public/images/hero6w.webp";
import hero7w from "@/public/images/hero7w.webp";
import hero26w from "@/public/images/hero26w.webp";
import hero9w from "@/public/images/hero9w.webp";
import hero10w from "@/public/images/hero10w.webp";

const carouselImagesBackground = [
  hero25w,
  hero6w,
  hero7w,
  hero26w,
  hero1w,
  hero22w,
  hero3w,
  hero4w,
  hero9w,
  hero10w,
];

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image, { StaticImageData } from "next/image";
// const carouselImages = [
//   hero1w,
//   hero2w,
//   hero3w,
//   hero4w,
//   hero5w,
//   hero6w,
//   hero7w,
//   hero8w,
// ];
import { type CarouselApi } from "@/components/ui/carousel";

// function CarouselBackground({
//   carouselImagesBackground,
// }: {
//   carouselImagesBackground: StaticImageData[];
// }) {
  function CarouselBackground() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="hidden lg:block">
      <Carousel
        // className="w-full max-w-md"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
        style={{
          width: "100%",
          height: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "fixed",
          top: "0px",
          left: 0,
          zIndex: 0,
        }}
      >
        <CarouselContent style={{ opacity: 0.8 }}>
          {carouselImagesBackground.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  {/*  <CardContent className='p-2 flex aspect-square items-center justify-center'> */}
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt="hero"
                      className=" object-cover"
                      style={{
                        display: "block",
                        width: "100vw",
                        height: "100vh",
                      }}
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default CarouselBackground;
