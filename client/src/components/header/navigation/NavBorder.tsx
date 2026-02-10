"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { memo } from "react";

const NavBorderInner = memo(
  function NavBorderComp({ isActive }: { isActive: boolean }) {

    return (
      <div
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full transition-all duration-700 border-b-2 border-b-primary group-hover:w-full z-50 pointer-events-none",
          isActive ? "w-full" : "w-0",
        )}
      />
    );
  },
    (prevProps, nextProps) => {
    // CHỐT CHẶN: Chỉ render lại nếu trạng thái active thay đổi
    return prevProps.isActive === nextProps.isActive;
  }
);

function NavBorder({ href }: { href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <>
      <NavBorderInner isActive={isActive} />
    </>
  );
}

export default NavBorder;
