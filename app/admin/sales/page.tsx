import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { fetchAdminOrders } from "@/utils/actionsServer";
import { formatCurrency, formatDate } from "@/utils/format";
import OrderButtonDialog from "@/components/orders/OrderButtonDialog";

async function SalesPage() {
  const orders = await fetchAdminOrders();

  return (
    <div
    // className="productsContent px-0.5 sm:px-2 lg:px-4 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2 "
    >
      <Table className="border-2 border-card-foreground/60 p-2 rounded-md">
        <TableCaption className="text-base lg:text-lg">
          Total Orders : {orders.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="border border-card-foreground/40">
              Email
            </TableHead>
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
            const { products, orderTotal, tax, shipping, createdAt, email } =
              order;
            // const { products, orderTotal, tax, shipping, createdAt, addressCountry, addressCity, addressStreet, addressStreetNumber, addressCode, phoneNumber } = order;
            return (
              <TableRow
                key={order.id}
                className="border border-card-foreground/40"
              >
                <TableCell className="border border-card-foreground/40">
                  {email}
                </TableCell>
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
export default SalesPage;

// function SalesPage() {
//   return (
//     <div>SalesPage</div>
//   )
// }
// export default SalesPage
