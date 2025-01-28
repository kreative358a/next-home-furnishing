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

function Navbar({ isUser }: { isUser: string }) {
  return (
    <nav
      className="border-b bg-muted/40 py-4 backdrop-blur-md"
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
      <Container className="flex flex-col sm:flex-row sm:justify-around sm:items-center flex-wrap py-4 gap-4">
        <Logo />
        <Suspense>{/* <NavSearch /> */}</Suspense>
        <div className="absolute flex gap-4 items-center right-10">
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
