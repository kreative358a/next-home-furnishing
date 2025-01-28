"use client";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "react-redux";
import { store } from "../hooks/store";
// typeof window !== "undefined"
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {typeof window !== "undefined" ? (
        <Provider store={store}>
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            // disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </Provider>
      ) : (
        <>
          <Toaster />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </>
      )}
    </>
  );
}
export default Providers;

// function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <Provider store={store}>
//         <Toaster />
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           // disableTransitionOnChange
//         >
//           {children}
//         </ThemeProvider>
//       </Provider>
//     </>
//   );
// }
// export default Providers;

// 'use client';
// import { ThemeProvider } from './theme-provider';
// import { Toaster } from '@/components/ui/toaster';
// import { Provider } from 'react-redux';
// import { store } from './store';

// function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//     <Provider store={store}>
//       <Toaster/>
//       {children}
//       </Provider>
//     </>
//   );
// }
// export default Providers;
