
"use client"
import hero1 from '@/public/images/hero1.jpg';
import hero2 from '@/public/images/hero2.jpg';
import hero3 from '@/public/images/hero3.jpg';
import hero4 from '@/public/images/hero4.jpg';

import React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
const carouselImages = [hero1, hero2, hero3, hero4];
import { type CarouselApi } from "@/components/ui/carousel"

function HeroCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)  

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )  

  React.useEffect(() => {
    if (!api) {
      return
    }  
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api]) 

  return (
    <div className='hidden lg:block'>
      <Carousel
            // className="w-full max-w-md"
            // plugins={[plugin.current]}
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
            // setApi={setApi}
      >
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  {/*  <CardContent className='p-2 flex aspect-square items-center justify-center'> */}
                  <CardContent className='p-2'>
                    <Image
                      src={image}
                      alt='hero'
                      className='w-full h-[24rem] rounded-md object-cover'
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
