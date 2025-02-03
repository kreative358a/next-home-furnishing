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

async function SalesPage() {
  const orders = await fetchAdminOrders();

  return (
    <div className="productsContent px-0.5 sm:px-2 lg:px-4 pt-[120px] sm:pt-[94px] pb-4 lg:mt-2 ">
      <Table>
        <TableCaption>Total Orders : {orders.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Email</TableHead>
            <TableHead>Products</TableHead>
            <TableHead>Order Total</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead>Date</TableHead>
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
              <TableRow key={order.id}>
                <TableCell>{email}</TableCell>
                <TableCell>{products}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{formatCurrency(tax)}</TableCell>
                <TableCell>{formatCurrency(shipping)}</TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
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
