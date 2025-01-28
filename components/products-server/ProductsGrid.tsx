import { Product } from "@prisma/client";
import { formatCurrency } from "@/utils/format";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import FavoriteToggleButton from "./FavoriteToggleButton";
import FavoriteToggleButtonPage from "./FavoriteToggleButtonPage";
import AddToCartServer from "./AddToCartServer";
import SingleProductDialogButtonServer from "./SingleProductDialogButtonServer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function ProductsGrid({ products }: { products: Product[] }) {
  return (
    <div className="pt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
      {products.map((product) => {
        const { id, originId, name, price, image, company, color, category } =
          product;
        // const productId = product.id;
        const dollarsAmount = formatCurrency(price);
        return (
          <article
            key={`${id}-grid`}
            // className="card w-full shadow-xl hover:shadow-2xl transition duration-300 border-2 hover:border-2 border-blue-300/10 hover:border-blue-300/40 rounded-md bg-muted/80 hover:bg-muted/90"
            className="grid grid-cols-2 md:flex md:flex-col w-full shadow-xl hover:shadow-2xl transition duration-300 border-2 hover:border-2 border-blue-300/10 hover:border-blue-300/40 rounded-md bg-muted/80 hover:bg-muted/90"
          >
            <div className="absolute ml-[20px] mt-[20px] md:ml-[30px] md:mt-[30px]">
              <FavoriteToggleButton productId={id} />
            </div>
            <Link href={`/products-server/${id}`}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <figure className="px-4 pt-4">
                      <img
                        src={image}
                        alt={name}
                        className="rounded-md md:rounded-xl h-auto w-full object-cover border-2 border-slate-500/20"
                      />
                    </figure>
                  </TooltipTrigger>
                  <TooltipContent className="bg-muted/80">
                    <p className="text-muted-foreground text-base">
                      click link
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <div className="px-1 mt-4 md:px-2 items-center text-center">
              <p className="text-lg lg:text-xl xl:text-2xl tracking-wider">
                {name}
              </p>
              <p className=" text-base lg:text-lg xl:text-xl text-amber-500 mt-1">
                company: {company}
              </p>
              <p className="text-base lg:text-lg xl:text-xl mt-1">
                color:{" "}
                <span
                  style={{ color: `${color || "blue"}` }}
                  className="font-medium"
                >
                  {" "}
                  {color}
                </span>
              </p>
              <p className="text-base lg:text-lg xl:text-xl dark:text-medium text-semibold mt-1">
                {dollarsAmount}
              </p>
              <p className="text-green-600 text-sm lg:text-base xl:text-lg bg-accent/60 px-2 rounded-sm mt-1">
                category: {category}
              </p>

              <div className="w-full justify-center items-center flex flex-col gap-2 my-4">
                <AddToCartServer
                  productId={id}
                  color={color}
                  price={price}
                  name={name}
                  image={image}
                />
                <SingleProductDialogButtonServer productId={id} />
              </div>
            </div>

            {/* <div className="absolute w-full justify-center items-center flex flex-col gap-x-2 bottom-4 z-5 ml-[36px]">

              <AddToCartClient productId={id} color={color} price={price} />
              <SingleProductDialogButtonServer productId={id} />

            </div> */}
          </article>
        );
      })}
    </div>
  );
}
export default ProductsGrid;

// import { formatCurrency } from '@/utils/format';
// import { Product } from '@prisma/client';
// import Link from 'next/link';
// import { Card, CardContent } from '../ui/card';
// import Image from 'next/image';
// import FavoriteToggleButton from './FavoriteToggleButton';
// function ProductsGrid({ products }: { products: Product[] }) {
//   return (
//     <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
//       {products.map((product) => {
//         const { name, price, image } = product;
//         const productId = product.id;
//         const dollarsAmount = formatCurrency(price);

//         return (
//           <article key={productId} className='group relative'>
//             <Link href={`/products/${productId}`}>
//               <Card className='transform group-hover:shadow-xl transition-shadow duration-500'>
//                 <CardContent className='p-4'>
//                   <div className='relative h-64 md:h-48 rounded overflow-hidden '>
//                     <Image
//                       src={image}
//                       alt={name}
//                       fill
//                       sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw '
//                       priority
//                       className='rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500'
//                     />
//                   </div>
//                   <div className='mt-4 text-center'>
//                     <h2 className='text-lg capitalize'>{name}</h2>
//                     <p className='text-muted-foreground mt-2'>
//                       {dollarsAmount}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </Link>
//             <div className='absolute top-7 right-7 z-5'>
//               <FavoriteToggleButton productId={productId} />
//             </div>
//           </article>
//         );
//       })}
//     </div>
//   );
// }
// export default ProductsGrid;
