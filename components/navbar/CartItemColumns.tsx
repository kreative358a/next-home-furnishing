import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import Link from "next/link";
// import { Product } from "@prisma/client";
// import SingleProductDialogCart from "./SingleProductDialogCart";

export type ProductCartProps = {
  name: string;
  company: string;
  color: string;
  price: number;
  id: string;
  title: string;
  image: string;
  type: string;
  originId: string;
  description: string;
  category: string;
};

export const FirstColumn = ({
  name,
  image,
}: {
  image: string;
  name: string;
}) => {
  return (
    <div className="relative h-32 w-32 sm:h-32 sm:w-32">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        priority
        className="w-full rounded-md object-cover"
      />
    </div>
  );

  // return (
  //   <div className='relative h-24 w-24 sm:h-32 sm:w-32'>
  //     <Image
  //       src={image}
  //       alt={name}
  //       fill
  //       sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
  //       priority
  //       className='w-full rounded-md object-cover'
  //     />
  //   </div>
  // );
};

export const SecondColumn = ({
  name,
  company,
  productId,
  color,
  price,
  productCart,
}: {
  name: string;
  company: string;
  productId: string;
  color: string;
  productCart: ProductCartProps;
  price: number;
}) => {
  return (
    <div className="w-40 sm:w-48">
      <Link href={`/products-server/${productId}`}>
        <h3 className="text-base lg:text-lg 2xl:text-xl font-semibold dark:font-medium hover:underline">
          {name}
        </h3>
      </Link>
      <h4 className="mt-2 text-sm lg:text-base 2xl:text-lg font-semibold dark:font-medium ">
        {company}
      </h4>
      <h4 className="mt-2 text-sm lg:text-base 2xl:text-lg font-semibold dark:font-medium">
        color:{" "}
        <span
          className="font-bold dark:font-semibold"
          style={{ color: `${color}` }}
        >
          {color}
        </span>
      </h4>
      {/* <SingleProductDialogCart
        id={productId}
        productCart={productCart}
        price={price}
        color={color}
      /> */}
    </div>
  );
};

export const FourthColumn = ({
  price,
  amount,
}: {
  price: number;
  amount: number;
}) => {
  return (
    <div>
      <p className="font-medium md:ml-auto">{formatCurrency(price)}</p>
      <p className=" text-sm font-medium md:ml-auto">
        total: <br />
        {formatCurrency(price * amount)}
      </p>
    </div>
  );
};
