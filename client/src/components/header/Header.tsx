import Logo from "../common/Logo";
import NavBar from "./navigation/NavBar";
import NavInteractive from "./navigation/NavInteractive";

function Header() {
  console.log("header")
  return (
    <>
      <header className="fixed top-0 w-full border-b border-white/10 backdrop-blur-md z-50">
        <nav className="flex items-center justify-between">
          <Logo />
          <NavBar />
          <NavInteractive />
        </nav>
      </header>
    </>
  );
}

export default Header;
