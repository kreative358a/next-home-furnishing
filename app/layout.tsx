import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Container from "@/components/global/Container";
import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
// import { useTheme } from 'next-themes';
import { themeList } from "@/components/navbar/DarkMode";

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

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const { theme, setTheme } = useTheme();
//   return (

//     <ClerkProvider
//     appearance={{

//       baseTheme: [neobrutalism, dark, shadesOfPurple],
//       variables: { colorPrimary: 'blue' },
//       signIn: {
//         baseTheme: [shadesOfPurple],
//         // variables: { colorPrimary: 'green' },
//       },
//     }}>
//     <html lang="en" suppressHydrationWarning>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
//       >
//         <Providers>
//           <Navbar />
//           <Container className="py-20">{children}</Container>
//         </Providers>
//       </body>
//     </html>
//     </ClerkProvider>
//   );
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { theme, setTheme } = useTheme();
  return (

    <ClerkProvider 
    appearance={{
      elements: {
        cardBox: 'bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-100',
        card: 'bg-blue-100 dark:bg-blue-950 text-blue-900 dark:text-blue-100',
        headerTitle: 'text-blue-900 dark:text-blue-100',
        socialButtonsBlockButton: 'bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100',
        formFieldLabel: 'text-blue-900 dark:text-blue-100',
        formFieldInput: 'bg-blue-200 dark:bg-blue-800 text-blue-900 dark:text-blue-100',
        footer: 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100',
        formButtonPrimary: 'bg-blue-300 hover:bg-blue-400 dark:bg-blue-700 text-blue-950 dark:text-blue-100 border-2 border-blue-400 dark:bg-blue-700 dark:hover:bg-blue-800 outline-0 shadow-transparent',

      }
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased`}
      >
        <Providers>
          <Navbar />
          <Container className="py-20">{children}</Container>
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}