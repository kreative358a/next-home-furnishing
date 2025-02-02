import { LuUser } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  currentUser,
  // auth
} from "@clerk/nextjs/server";
import { NotifyButton } from "../global/NotifyToast";

async function OurProducts() {
  // const { userId } = auth()

  const user = await currentUser();

  const profileId = user?.id;

  if (profileId) {
    return (
      <Button asChild size="lg" className="mt-10 max-lg:hidden text-lg">
        <Link href="/products-test">Our Products</Link>
      </Button>
    );
  }

  return <NotifyButton />;
}
export default OurProducts;
