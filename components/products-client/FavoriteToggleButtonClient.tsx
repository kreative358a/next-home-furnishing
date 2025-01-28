"use client";
// import { auth } from "@clerk/nextjs/server";
// import { useAuth } from "@clerk/clerk-react";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actionsClient";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { useState, useEffect } from "react";

function FavoriteToggleButtonClient({
  productId,
  userId,
}: {
  productId: string;
  userId: string;
}) {
  // const { userId } = auth();
  // const { userId } = useAuth();
  const [favoriteId, setFavoriteId] = useState<string>("");
  // const [userId, setUserId] = useState<string | null>("");

  useEffect(() => {
    const favoriteIdFunc = async () => {
      const favoriteIdAsync = await fetchFavoriteId({ productId });
      if (favoriteIdAsync) setFavoriteId(favoriteIdAsync);
    };
    favoriteIdFunc();
  }, [productId]);

  // useEffect(() => {
  //   const userIdFunc = async () => {
  //     const { userId } = auth();
  //     setUserId(userId);
  //   };
  //   userIdFunc();
  // }, []);

  if (!userId) return <CardSignInButton />;

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
export default FavoriteToggleButtonClient;

// import { FaHeart } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
// function FavoriteToggleButton({ productId }: { productId: string }) {
//   // return (
//   //   <Button size='icon' variant='outline' className='p-2 cursor-pointer bg-blue-950/60'>
//   //     <FaHeart className='fill-blue-200/60'/>
//   //   </Button>
//   // );
//   return (
//     <>
//       <Button size="icon" variant="outline" className="p-2 cursor-pointer">
//         <FaHeart />
//       </Button>
//       {/* <FaHeart style={{stroke:'green' ,strokeWidth:'2px'}} className="border-2 w-8 h-8 p-1" /> */}
//     </>
//   );
// }
// export default FavoriteToggleButton;
