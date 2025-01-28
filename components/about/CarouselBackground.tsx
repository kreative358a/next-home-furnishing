"use client";
import hero1w from "@/public/images/hero1w.webp";
import hero12w from "@/public/images/hero12w.webp";
import hero3w from "@/public/images/hero3w.webp";
import hero24w from "@/public/images/hero24w.webp";
import hero5w from "@/public/images/hero5w.webp";
import hero16w from "@/public/images/hero16w.webp";
import hero7w from "@/public/images/hero7w.webp";
import hero27w from "@/public/images/hero27w.webp";
import hero9w from "@/public/images/hero9w.webp";
import hero10w from "@/public/images/hero10w.webp";

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
import Image from // StaticImageData
"next/image";
const carouselImagesBackground = [
  hero1w,
  hero12w,
  hero3w,
  hero27w,
  hero9w,
  hero10w,
  hero24w,
  hero5w,
  hero16w,
  hero7w,
];
import { type CarouselApi } from "@/components/ui/carousel";

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
                    priority
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
