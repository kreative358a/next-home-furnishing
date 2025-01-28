import { Prisma } from "@prisma/client";

// 651 7.50
// określamy który model chcemy uwzględnić w tym przypadku
// jest to nasz model pozycji koszyka, dzięki czemu odzyskujemy wszystko
// co mamy dla pozycji koszyka i produktu
export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

// FormData Provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".
export type messageFunction = (message: string) => Promise<{ message: string }>;

export type actionFunction = (
  // prevState: any,
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>;

export type actionFunctionCreateProduct = (
  // prevState: any,
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>;

export type actionFunctionAddProduct = (
  // prevState: any,
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }>;

export type actionFunctionUrl = (
  // prevState: any,
  prevState: unknown,
  formData: FormData
) => Promise<{ fetchSingleProductNew: Product }>;

export type actionFunctionProductMessage = actionFunction & actionFunctionUrl;

export type actionFunctionSaveAndAdd = (
  // prevState: any,
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }> & Promise<{ message: string }>;

export type actionFunctionCreateAndAddNew = (
  // prevState: any,
  prevState: unknown,
  formData: FormData
) => Promise<{ message: string }> & actionFunctionAddProduct;

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string | number;
  amount: number;
  company: string;
  cartId: string;
  productColor: string;
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

export type ProductsResponseHF = ProductHF[];

export type ProductHF = {
  id: string;
  name: string;
  price: {
    currency: string;
    currentPrice: number;
    discounted: boolean;
  };
  typeName: string;
  image: string;
  contextualImageUrl: string;
  imageAlt: string;
  url: string;
  categoryPath: [
    {
      name: string;
      key: string;
    },
    {
      name: string;
      key: string;
    }
  ];
  variants: [];

  measurement: string;
  params?: ParamsHF[];
};

export type ParamsHF = {
  total?: number;
  keyword?: string;
};

export type ProductsResponseWithParamsHF = ProductsResponseHF & ParamsHF;

export type SingleProductResponseHF = {
  data: ProductHF;
  meta: object;
  // meta: {};
};

export type CartItemST = {
  cartId: string;
  productId?: number | string;
  image: string;
  title: string;
  price: string | number;
  amount: number;
  productColor: string;
  company?: string;
  producthf?: CartItemHF;
};

export type CartItemHF = {
  cartId: string;
  productId?: string | number;
  image: string;
  title: string;
  price: string | number;
  amount: number;
  productColor: string;
  company?: string;
};

export type Checkout = {
  name: string;
  address: string;
  chargeTotal: number;
  orderTotal: string;
  cartItems: CartItem[];
  numItemsInCart: number;
};

export type Order = {
  id: number;
  attributes: {
    address: string;
    cartItems: CartItem[];
    createdAt: string;
    name: string;
    numItemsInCart: number;
    orderTotal: string;
    publishedAt: string;
    updatedAt: string;
  };
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export type OrdersMeta = {
  pagination: Pagination;
};

export type OrdersResponse = {
  data: Order[];
  meta: OrdersMeta;
};

export type Product = {
  id: number | string;
  attributes: {
    category: string;
    company: string;
    createdAt: string;
    description: string;
    featured: boolean;
    image: string;
    price: string;
    publishedAt: string;
    shipping: boolean;
    title: string;
    updatedAt: string;
    colors: string[];
  };
};

export type ProductsResponse = {
  data: Product[];
  meta: ProductsMeta;
};

export type ProductsMeta = {
  categories: string[];
  companies: string[];
  pagination: Pagination;
  // total: number;
};

export type Params = {
  search?: string;
  category?: string;
  company?: string;
  order?: string;
  price?: string;
  shipping?: string;
  page?: number;
  total?: number;
  keyword?: string;
};

export type ProductsResponseWithParams = ProductsResponse & { params: Params };

export type SingleProductResponse = {
  data: Product;
  meta: object;
  // meta: {};
};
