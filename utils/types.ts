import { Prisma } from '@prisma/client';

// 651 7.50
// określamy który model chcemy uwzględnić w tym przypadku
// jest to nasz model pozycji koszyka, dzięki czemu odzyskujemy wszystko
// co mamy dla pozycji koszyka i produktu
export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

// FormData Provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".
export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
  // imageUrl: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};
