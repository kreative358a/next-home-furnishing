type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  // { href: "/products", label: "products" },
  { href: "/products-api", label: "products-api" },
  // { href: "/products-client", label: "products-client" },
  // { href: "/products-server", label: "products-server" },
  { href: "/products-test", label: "products-test" },
  { href: "/favorites", label: "favorites" },
  { href: "/reviews", label: "reviews" },
  { href: "/cart", label: "cart" },
  { href: "/orders", label: "orders" },
  { href: "/admin/sales", label: "dashboard" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "sales" },
  { href: "/admin/products", label: "my products" },
  { href: "/admin/products/create", label: "create product" },
];
