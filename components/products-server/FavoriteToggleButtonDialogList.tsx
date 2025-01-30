// import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actionsServer";
import FavoriteToggleForm from "./FavoriteToggleForm";

async function FavoriteToggleButtonDialogList({
  productId,
  userIdList,
}: {
  productId: string;
  userIdList: string;
}) {
  // const { userId } = auth();
  // if (!userId) return <CardSignInButton />;
  if (!userIdList) return <CardSignInButton />;
  const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}
export default FavoriteToggleButtonDialogList;

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
