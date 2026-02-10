import { NavListType } from "@/@types/header.type";
import NavWrapper from "./NavWrapper";
import { navList } from "@/data/header.data";
import NavItem from "./NavItem";

function NavBar() {
  const navListData: NavListType = navList;

  return (
    <>
      <NavWrapper>
        {navListData.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </NavWrapper>
    </>
  );
}

export default NavBar;
