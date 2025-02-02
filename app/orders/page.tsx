import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import SectionTitle from "@/components/global/SectionTitle";
import { fetchUserOrders } from "@/utils/actionsServer";
import { formatCurrency, formatDate } from "@/utils/format";
import OrderButtonDialog from "@/components/orders/OrderButtonDialog";

async function OrdersPage() {
  const orders = await fetchUserOrders();

  return (
    <div className="productsContent px-0.5 sm:px-2 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2">
      <SectionTitle text="Your Orders" />
      <Table className="border-2 border-card-foreground/60 p-2 rounded-md">
        <TableCaption className="text-base lg:text-lg">
          Total Orders : {orders.length}
        </TableCaption>
        <TableHeader className="border border-card-foreground/40">
          <TableRow className="border border-card-foreground/40">
            <TableHead className="border border-card-foreground/40">
              Products
            </TableHead>
            <TableHead className="border border-card-foreground/40">
              Order Total
            </TableHead>
            <TableHead className="border border-card-foreground/40">
              Tax
            </TableHead>
            <TableHead className="border border-card-foreground/40">
              Shipping
            </TableHead>
            <TableHead className="hidden sm:block border border-card-foreground/40">
              Date
            </TableHead>
            <TableHead className="border border-card-foreground/40">
              Content
            </TableHead>
            {/* <TableHead>Address</TableHead> */}
            {/* <TableHead>Phone</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const {
              products,
              orderTotal,
              tax,
              shipping,
              createdAt,
              orderItemsJson,
            } = order;
            // console.log("cartItems order: ", orderItemsJson);
            // const orderItems = JSON.parse(orderItemsJson);
            // const {color} = JSON.parse(cartItems)
            // const { products, orderTotal, tax, shipping, createdAt, addressCountry, addressCity, addressStreet, addressStreetNumber, addressCode, phoneNumber } = order;
            // console.log("cartItems: ", cartItems)
            return (
              <TableRow
                className="border border-card-foreground/40"
                key={order.id}
              >
                <TableCell className="border border-card-foreground/40">
                  {products}
                </TableCell>
                <TableCell className="border border-card-foreground/40">
                  {formatCurrency(orderTotal)}
                </TableCell>
                <TableCell className="border border-card-foreground/40">
                  {formatCurrency(tax)}
                </TableCell>
                <TableCell className="border border-card-foreground/40">
                  {formatCurrency(shipping)}
                </TableCell>
                <TableCell className="hidden items-center sm:block pt-2">
                  {formatDate(createdAt)}
                </TableCell>
                <TableCell className="border border-card-foreground/40">
                  <OrderButtonDialog order={order} />
                </TableCell>

                {/* <TableCell>{`${addressCountry} ${addressCode} ${addressCity} ${addressStreet} ${addressStreetNumber}`}</TableCell> */}
                {/* <TableCell>{phoneNumber}</TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
export default OrdersPage;
