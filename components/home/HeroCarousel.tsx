"use client";
import hero1w from "@/public/images/hero1w.webp";
import hero2w from "@/public/images/hero2w.webp";
import hero3w from "@/public/images/hero3w.webp";
import hero4w from "@/public/images/hero4w.webp";
import hero5w from "@/public/images/hero5w.webp";
import hero6w from "@/public/images/hero6w.webp";
import hero7w from "@/public/images/hero7w.webp";
import hero8w from "@/public/images/hero8w.webp";

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
import Image from "next/image";
const carouselImages = [
  hero1w,
  hero2w,
  hero3w,
  hero4w,
  hero5w,
  hero6w,
  hero7w,
  hero8w,
];
import { type CarouselApi } from "@/components/ui/carousel";

function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
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
    <div
      // className=" w-[90%] max-w-[34rem] mx-auto h-[28rem] p-4 space-x-4 bg-slate-700 rounded-box lg:w-[34rem] lg:max-w-[100%] lg:h-[38rem]"
      className=" w-[90%] max-w-[34rem] m-auto h-[28rem] px-4 py-6  bg-slate-700 rounded-md lg:w-[34rem] lg:max-w-[100%] "
    >
      <Carousel
        // className="w-full max-w-md"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={setApi}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent
                    // className='p-2 flex aspect-square items-center justify-center'
                    className="p-2"
                  >
                    <Image
                      src={image}
                      alt="hero"
                      className="w-full h-[24rem] rounded-md object-cover"
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
export default HeroCarousel;
