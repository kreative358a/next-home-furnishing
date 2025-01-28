import EmptyList from "@/components/global/EmptyList";
import { deleteProductAction, fetchAdminProducts } from "@/utils/actions";
import Link from "next/link";

import { formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

async function AdminProductsPage() {
  const items = await fetchAdminProducts();
  if (items.length === 0) return <EmptyList />;

  return (
    <div className="">
      <Table className="border-2 p-2 rounded-md">
        <TableCaption className="capitalize">
          total products : {items.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="px-4">Product Name</TableHead>
            <TableHead className="px-4">Company</TableHead>
            <TableHead className="px-4">Price</TableHead>
            <TableHead className="px-4">Actions</TableHead>
            <TableHead className="px-4">Image</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            const { id: productId, name, company, price, image } = item;
            // console.log('productId: ', productId);

            return (
              <TableRow key={productId}>
                <TableCell>
                  <Link
                    href={`/products/${productId}`}
                    className="underline text-muted-foreground tracking-wide capitalize px-2"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell className="px-4">{company}</TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell className="flex items-center gap-x-2">
                  <Link href={`/admin/products/${productId}/edit`}>
                    <IconButton actionType="edit" />
                  </Link>
                  <DeleteProduct productId={productId} />
                </TableCell>
                <TableCell className="px-4">
                  <Popover>
                    <PopoverTrigger>show</PopoverTrigger>
                    <PopoverContent>
                      <img src={image} />
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

export default AdminProductsPage;

// import ProductsContainer from '@/components/products/ProductsContainer';

// async function ProductsPage({
//   searchParams,
// }: {
//   searchParams: { layout?: string; search?: string };
// }) {
//   const layout = searchParams.layout || 'grid';
//   const search = searchParams.search || '';
//   return (
//     <>
//       <ProductsContainer layout={layout} search={search} />
//     </>
//   );
// }
// export default ProductsPage;
