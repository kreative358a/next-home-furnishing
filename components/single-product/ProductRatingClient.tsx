"use client";
import { fetchProductRating } from "@/utils/actions";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

function ProductRatingClient({ productId }: { productId: string }) {
  const [count, setCount] = useState<number>(0);
  const [rating, setRating] = useState<string | number>(0);
  useEffect(() => {
    const countRatingAsync = async () => {
      const { count, rating } = await fetchProductRating(productId);
      setCount(count);
      setRating(rating);
    };
  }, []);

  const className = `flex gap-1 items-center text-md mt-1 mb-4`;
  const countValue = `(${count}) reviews`;

  return (
    <span className={className}>
      <FaStar className="w-3 h-3" />
      {rating} {countValue}
    </span>
  );
}
export default ProductRatingClient;
