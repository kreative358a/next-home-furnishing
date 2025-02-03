import { LuUser } from "react-icons/lu";
import { Button } from "../ui/button";
import {
  currentUser,
  // auth
} from "@clerk/nextjs/server";
import { NotifyButton } from "../global/NotifyToast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

async function NotifyLogIn({
  productId,
  image,
  name,
}: {
  productId: string;
  image: string;
  name: string;
}) {
  // const { userId } = auth()

  const user = await currentUser();

  const profileId = user?.id;

  if (profileId) {
    return (
      <Link href={`/products-test/${productId}`}>
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
              <p className="text-muted-foreground text-base">click link</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
    );
  }

  return <NotifyButton />;
}
export default NotifyLogIn;
