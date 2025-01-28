// "use client";

import { Button } from "@/components/ui/button";
import LoadingContainer from "@/components/global/LoadingContainer";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import { Suspense } from "react";
import CarouselBackground from "@/components/home/CarouselBackground";

function HomePage() {
  return (
    <>
      <CarouselBackground />
      <div className="productsContent sm:px-2 pt-4 pb-4 lg:mt-2">
        <Hero />
        <Suspense fallback={<LoadingContainer />}>
          <FeaturedProducts />
        </Suspense>
        {/* <h1 className='text-3xl'>HomePage</h1>
    <Button variant='default' size='lg' className='capitalize m-8 bg-primary text-blue-50 dark:text-blue-950'>
      Click me
    </Button> */}
      </div>
    </>
  );
}
export default HomePage;

// "use client";

// import { Button } from "@/components/ui/button";
// import LoadingContainer from "@/components/global/LoadingContainer";
// import Hero from "@/components/home/Hero";
// import FeaturedProducts from "@/components/home/FeaturedProducts";
// import { Suspense } from "react";
// import CarouselBackground from "@/components/home/CarouselBackground";
// import useFromStore from "@/hooks/useFromStore";
// import { useCartStore } from "@/cart-store/useCartStore";

// function HomePage() {
//   const cartItems = useFromStore(useCartStore, (state) => state.cart) || [];
//   const cart = useFromStore(useCartStore, (state) => state.cart) || [];
//   return (
//     <>
//       <CarouselBackground />
//       <div
//         className="productsContent pt-4 pb-4 lg:mt-2"
//         // style={{
//         //   position: "fixed",
//         //   zIndex: 9,
//         //   minWidth: "100%",
//         //   maxHeight: "94%",
//         //   maxWidth: "100%",
//         //   // minHeight: "100%",
//         //   top: "12%",
//         //   alignItems: "center",
//         //   justifyContent: "center",
//         //   flexDirection: "column",
//         //   left: 0,
//         //   paddingLeft: "20px",
//         //   paddingRight: "20px",
//         // }}
//       >
//         <Hero />
//         <Suspense fallback={<LoadingContainer />}>
//           <FeaturedProducts />
//         </Suspense>
//         {/* <h1 className='text-3xl'>HomePage</h1>
//     <Button variant='default' size='lg' className='capitalize m-8 bg-primary text-blue-50 dark:text-blue-950'>
//       Click me
//     </Button> */}
//       </div>
//     </>
//   );
// }
// export default HomePage;
