export interface Product {
  id: number;
  originId: string;
  name: string;
  company: string;
  description: string;
  featured: boolean;
  image: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
  images: string;
  prices: string;
  colors: string;
  color: string;
  category: string;
  // clerkId: string;

  //  discountPercentage: number;
  //   rating: number;
  //   stock: number;
  //   brand: string;
  //   category: string;
  //   thumbnail: string;
  //   images: string[];
  //   quantity?: number;
}

export type CartProductType = {
  productId: string;
  originId: string;
  name: string;
  image: string;
  images?: string;
  price: number;
  prices?: string;
  color: string;
  colors?: string;
  amount: number;
};

export type CartItemHF = {
  cartId: string;
  productID?: string;
  image: string;
  title: string;
  price: string | number;
  amount: number;
  productColor: string;
  company?: string;
};

export type CartItem = {
  cartId: string;
  productID?: number | string;
  image: string;
  title: string;
  price: string | number;
  amount: number;
  productColor: string;
  company?: string;
  producthf?: CartItemHF;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};
