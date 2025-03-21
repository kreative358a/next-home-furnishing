import Container from "../global/Container";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import { Suspense } from "react";

function Navbar() {
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
      <Container className="flex flex-col sm:flex-row sm:justify-around sm:items-center flex-wrap py-4 gap-4">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="absolute flex gap-4 items-center right-10">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
