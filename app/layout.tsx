import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// import "./index.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
// import { useTheme } from 'next-themes';
import { themeList } from "@/components/navbar/DarkMode";
import ProvidersClient from "./providers-client";
import ProvidersServer from "./providers-server";
// import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
// import { auth, currentUser } from "@clerk/nextjs/server";
// import { getAuthUserId } from "@/utils/actionsServer";

const inter = Inter({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Next Home Furnishing",
  description: "A nifty store built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { theme, setTheme } = useTheme();
  // const userId = getAuthUserId() as unknown as string;
  // const userId = auth();
  // const user = currentUser();
  // console.log("userId: ", userId);
  // console.log("user: ", user);
  // console.log("user.emailAddresses[0].emailAddress", user.)
  // console.log("RootLayout userId: ", userId);
  // function AuthUser() {
  //   if (!userId) {
  //     return "false";
  //   }
  //   return "true";
  // }
  // const isUser = "true";
  return (
    <ClerkProvider
      appearance={{
        elements: {
          cardBox:
            "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100",
          card: "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100",
          headerTitle: "text-slate-900 dark:text-slate-100",
          socialButtonsBlockButton:
            "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100",
          formFieldLabel: "text-slate-900 dark:text-slate-100",
          formFieldInput:
            "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100",
          footer:
            "bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100",
          formButtonPrimary:
            "bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 text-slate-900 dark:text-slate-100 border-2 border-slate-400 dark:bg-slate-700 dark:hover:bg-slate-800 outline-0 shadow-transparent border-card-foreground/60",
          otpCodeFieldInput:
            "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-2 border-",
          formResendCodeLink: "text-slate-900 dark:text-slate-100",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased bg-muted/80 w-[100vw] h-[100vh] m-0`}
        >
          <ProvidersServer>
            <Navbar />
            <Container className="py-2">{children}</Container>
          </ProvidersServer>
        </body>
      </html>
    </ClerkProvider>
  );
}
