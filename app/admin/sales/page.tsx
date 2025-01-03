import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { fetchAdminOrders } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";

async function SalesPage() {
  const orders = await fetchAdminOrders();

  return (
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
  );
}
export default SalesPage;

// function SalesPage() {
//   return (
//     <div>SalesPage</div>
//   )
// }
// export default SalesPage
