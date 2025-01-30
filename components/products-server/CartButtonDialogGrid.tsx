import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import CartButtonDialogGridContent from "./CartButtonDialogGridContent";

async function CartButtonDialogGrid({ productId }: { productId: string }) {
  // {typeof window !== "undefined"  ? (Number(localStorage.getItem('numItemsInCart'))) : (0)}
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="lg"
          // className="flex justify-center items-center relative mx-2"
          className="rounded-md mt-2 bg-secondary/40 py-1 px-4 text-base md:text-lg font-medium text-red-600 focus:outline-none data-[hover]:bg-secondary/60 data-[focus]:outline-1 data-[focus]:outline-white border-2 border-blue-600/50 hover:border-blue-600/80"
        >
          Content
        </Button>
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        className="dialog-content-main bg-muted/80 hover:bg-muted/90 min-w-[96%] md:min-w-[90%] max-h-[98%] h-[800px] mt-4 text-transparent"
      >
        <DialogClose asChild>
          <Button
            className="absolute w-20 text-base right-2 top-2 "
            type="button"
            variant="secondary"
          >
            Close
          </Button>
        </DialogClose>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        {/* <ScrollArea className="min-h-[90%] py-4"> */}
        <div className="pl-2 pr-0 sm:p-4 dialog-content-background max-h-[760px] bg-muted/20 hover:bg-muted/40 text-secondary-foreground">
          <CartButtonDialogGridContent productId={productId} />
          {/* </ScrollArea> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CartButtonDialogGrid;
