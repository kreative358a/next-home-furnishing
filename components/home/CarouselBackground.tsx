"use client";
import hero21w from "@/public/images/hero21w.webp";
import hero22w from "@/public/images/hero22w.webp";
import hero23w from "@/public/images/hero23w.webp";
import hero14w from "@/public/images/hero14w.webp";
import hero15w from "@/public/images/hero15w.webp";
import hero16w from "@/public/images/hero16w.webp";
import hero27w from "@/public/images/hero27w.webp";
import hero18w from "@/public/images/hero18w.webp";
import hero9w from "@/public/images/hero9w.webp";
import hero20w from "@/public/images/hero20w.webp";

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
const carouselImagesBackground = [
  hero21w,
  hero22w,
  hero23w,
  hero14w,
  hero15w,
  hero16w,
  hero27w,
  hero18w,
  hero9w,
  hero20w,
];
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
  );
}
export default CarouselBackground;
