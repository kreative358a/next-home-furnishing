// "use client";
import Container from "../global/Container";
import CartButton from "./CartButton";
import CartButtonDialog from "./CartButtonDialog";
import CartButtonClient from "./CartButtonClient";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import { Suspense } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { cookies } from "next/headers";
// import { getAuthUserEmail } from "@/utils/actionsServer";
import UserEmail from "./UserEmail";

function Navbar({ isUser }: { isUser: string }) {
  // const userEmail = getAuthUserEmail() as unknown as string;
  // console.log("userEmail: ", userEmail);
  // const cookieStore = cookies();
  // console.log("cookieStore: ", cookieStore);
  return (
    <nav
      className="border-b bg-muted/40 py-2 3xl:py-4 backdrop-blur-md"
      style={{
        minWidth: "100%",
        height: "auto",
        position: "fixed",
        zIndex: 11,
      }}
    >
      <ToastContainer
        transition={Bounce}
        position="bottom-center"
        theme="colored"
        className="absolute z-60"
      />
      <Container className="grid grid-col sm:flex sm:flex-row sm:justify-items-end sm:items-center py-4 gap-4">
        <div className="flex flex-row gap-4">
          <Logo />
          <UserEmail />
        </div>
        {/* <Suspense>
        </Suspense> */}

        <div className=" md:absolute flex gap-4 items-center right-10">
          {/* <CartButtonClient /> */}

          <CartButton isUser={isUser} />
          <CartButtonDialog />

          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
