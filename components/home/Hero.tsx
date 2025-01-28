import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";
import { NotifyButton } from "../global/NotifyToast";
import { auth } from "@clerk/nextjs/server";
// import { useAuth } from "@clerk/clerk-react";

async function Hero() {
  // const { userId } = useAuth();
  const { userId } = auth();
  return (
    <div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center bg-muted/60 p-4 rounded-md mx-auto">
      <div className="px-4 mx-auto ">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
          Designed for your shopping pleasure
        </h1>
        <p className="mt-8 w-90% lg:max-w-xl text-lg leading-8 text-justify">
          With the belief that every customer is unique and their time spent
          shopping is very valuable, we wanted to create a unique place with
          unique products for everyone.
        </p>
        <div className="mt-10">
          {userId ? (
            <Button asChild size="lg" className="mt-10 max-lg:hidden text-lg">
              <Link href="/products-server">Our Products</Link>
            </Button>
          ) : (
            <>
              <NotifyButton />
            </>
          )}
        </div>
      </div>
      <HeroCarousel />
    </div>
  );
}
export default Hero;
