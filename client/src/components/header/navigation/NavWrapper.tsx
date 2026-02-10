"use client"

import { cn } from "@/lib/utils";
import { store } from "@/store/store";
import { useAppStore } from "magos/react";
import React from "react";

function NavWrapper({ children }: { children: React.ReactNode }) {
  const [menuToggle] = useAppStore(store.menuToggle)

  return (
    <>
      <ul
        className={cn(
          "max-lg:absolute flex max-lg:flex-col items-center max-lg:w-full max-lg:p-4 max-lg:bg-background max-lg:-top-250  overflow-hidden rounded-md transition-all duration-700 z-50",
          menuToggle ? "max-lg:top-full" : "-max-lg:top-250",
        )}
      >
        {children}
      </ul>
    </>
  );
}

export default NavWrapper;
