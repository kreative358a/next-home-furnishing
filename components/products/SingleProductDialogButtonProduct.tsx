import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  // DialogClose,
} from "@/components/ui/dialog";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { LuShoppingCart } from "react-icons/lu";
// import { fetchCartItems } from "@/utils/actionsClient";
import SingleProductButtonDialogContent from "./SingleProductDialogButtonContent";
import "./products.css";

async function CartButtonDialog({ productId }: { productId: string }) {
  // {typeof window !== "undefined"  ? (Number(localStorage.getItem('numItemsInCart'))) : (0)}
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="lg"
          // className="flex justify-center items-center relative mx-2"
          className="rounded-md mt-2 bg-secondary/40 py-1 px-4 text-base md:text-lg font-medium text-red-600 focus:outline-none data-[hover]:bg-secondary/60 data-[focus]:outline-1 data-[focus]:outline-white border-2 border-blue-600/50 hover:border-blue-600/80 ml-[-48px]"
        >
          Content
        </Button>
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        className="dialog-content-main bg-muted/80 hover:bg-muted/90 min-w-[96%] md:min-w-[90%] max-h-[800px]"
      >
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        {/* <ScrollArea className="min-h-[90%] py-4"> */}
        <div className="dialog-content-background max-h-[760px] scrollbar-thin">
          <SingleProductButtonDialogContent productId={productId} />
          {/* </ScrollArea> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CartButtonDialog;
