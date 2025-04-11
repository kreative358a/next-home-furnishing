import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

// const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);
const isPublicRoute = createRouteMatcher([
  "/",
  "/products-api(.*)",
  "/products-test(.*)",
  "/about",
]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

const allowedOrigins = [
  "https://www.ikea.com",
  "https://next-home-furnishing.vercel.app/",
  "http://localhost:3002/",
];

const corsOptions = {
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// user_2qX2pW86GdzkoSoprNXyPhxmvlu

// export default clerkMiddleware((auth, req) => {
//   // console.log('auth().userId: ', auth().userId);

//   const isAdminUser = auth().userId === process.env.ADMIN_USER_ID;

//   if (isAdminRoute(req) && !isAdminUser) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (!isPublicRoute(req)) auth().protect();
// });

// export default clerkMiddleware(async (auth, req) => {
//   // console.log('auth().userId: ', auth().userId);

//   const isAdminUser = auth().userId === process.env.ADMIN_USER_ID;

//   if (isAdminRoute(req) && !isAdminUser) {
//     return NextResponse.redirect(new URL("/", req.url));
//   }

//   if (!isPublicRoute(req)) await auth().protect();
// });

export default clerkMiddleware(async (auth, req) => {
  // console.log('auth().userId: ', auth().userId);
  // const origin = req.headers.get("origin") ?? "";
  // const isAllowedOrigin = allowedOrigins.includes(origin);

  // Handle preflighted requests
  // const isPreflight = req.method === "OPTIONS";
  console.log(req.nextUrl);
  const isAdminUser = auth().userId === process.env.ADMIN_USER_ID;

  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!isPublicRoute(req)) await auth().protect();

  // if (isPreflight) {
  //   const preflightHeaders = {
  //     ...(isAllowedOrigin && { "Access-Control-Allow-Origin": origin }),
  //     ...corsOptions,
  //   };
  //   return NextResponse.json({}, { headers: preflightHeaders });
  // }

  // // Handle simple requests
  // const response = NextResponse.next();

  // if (isAllowedOrigin) {
  //   response.headers.set("Access-Control-Allow-Origin", origin);
  // }

  // Object.entries(corsOptions).forEach(([key, value]) => {
  //   response.headers.set(key, value);
  // });

  // return response;
  // const res = NextResponse.next();
  // res.headers.append("Access-Control-Allow-Origin", "https://www.ikea.com");
  // return res;
});

// export function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   res.headers.append("Access-Control-Allow-Origin", "https://www.ikea.com");
//   return res;
// }

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|avif|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    "/api/:path*",
  ],
};
