export type ProductsResponse = {
  data: Product[];
  meta: ProductsMeta;
};

export type ProductsResponseHF = ProductHF[];

//export type ProductsResponseHF = ProductHF[];

// products: Array<ProductHF>;
// products: (ProductHF);
// products: (ProductHF[])

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

export type ProductsMeta = {
  categories: string[];
  companies: string[];
  pagination: Pagination;
  // total: number;
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
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

export type ParamsHF = {
  total?: number;
  keyword?: string;
};

export type ProductsResponseWithParams = ProductsResponse & { params: Params };

export type ProductsResponseWithParamsHF = ProductsResponseHF & ParamsHF;

// export type ProductsResponseWithParamsHF = ProductsResponseHF & {
//   params: ParamsHF;
// };

export type SingleProductResponse = {
  data: Product;
  meta: object;
  // meta: {};
};

export type SingleProductResponseHF = {
  data: ProductHF;
  meta: object;
  // meta: {};
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

export type OrdersMeta = {
  pagination: Pagination;
};

export type OrdersResponse = {
  data: Order[];
  meta: OrdersMeta;
};
