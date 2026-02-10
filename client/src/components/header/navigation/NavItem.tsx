import { INavItem } from "@/@types/header.type";
import Link from "next/link";
import NavBorder from "./NavBorder";

function NavItem({
  item
}: {
  item: INavItem
}) {
  return (
    <>
      <Link
        href={item.href}
        className="group rounded-md max-lg:w-full text-center transition-all duration-700 hover:bg-secondary active:bg-secondary"
      >
        <li className="relative font-semibold px-1.5 py-2">
          {item.label}
          <NavBorder href={item.href} />
        </li>
      </Link>
    </>
  );
}

export default NavItem;
