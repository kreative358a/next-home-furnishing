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
import OrderContent from "./OrderContent";
import { Order } from "@prisma/client";

type OrderItemsJson = {
  productId: string;
  amount: number;
  color: string;
  price: number;
};

async function OrderButtonDialog({ order }: { order: { [x: string]: any } }) {
  const { products, orderTotal, tax, shipping, createdAt, orderItemsJson } =
    order;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="flex justify-center items-center relative mx-2 bg-slate-400/60 hover:bg-slate-400/80"
        >
          content
        </Button>
      </DialogTrigger>

      <DialogContent
        aria-describedby={undefined}
        // className="dialog-content-main bg-muted/80 hover:bg-muted/90 min-w-[96%] md:min-w-[90%] max-h-[800px]"
        // className="dialog-content-main bg-muted/80 hover:bg-muted/90 min-w-[96%] md:min-w-[90%] max-h-[98%]  mt-4 text-transparent"
        className="dialog-content-main bg-muted/80 hover:bg-muted/90 max-w-[98%] min-w-[98%] sm:max-w-[96%] sm:min-w-[96%] md:max-w-[90%] md:min-w-[90%] max-h-[98%] p-0 sm:p-2 my-4 text-transparent rounded-md mx-auto"
      >
        <DialogClose asChild>
          <Button
            className="absolute w-20 text-base right-2 top-2 "
            type="button"
            // variant="secondary"
          >
            Close
          </Button>
        </DialogClose>
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        {/* <ScrollArea className="min-h-[90%] py-4"> */}
        <div
          // className="dialog-content-background max-h-[760px] text-secondary-foreground mt-[10px]"
          className=" dialog-content-background-cart h-[100%] 2xl:h-[80%] 3xl:h-[100%] max-h-[760px] bg-muted/20 hover:bg-muted/40 text-secondary-foreground max-w-[100%] mt-10"
        >
          <OrderContent order={order} />
          {/* </ScrollArea> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default OrderButtonDialog;
