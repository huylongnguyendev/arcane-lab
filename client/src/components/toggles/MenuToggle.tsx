"use client";

import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useAppStore } from "magos/react";
import { store } from "@/store/store";
import { cn } from "@/lib/utils";

function MenuToggle() {
  const [menuToggle, setMenuToggle] = useAppStore(store.menuToggle);

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="lg:hidden relative"
        onClick={setMenuToggle.setToggle}
      >
        <div
          className={cn(
            "transition-all duration-300 transform",
            menuToggle
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100",
          )}
        >
          <Menu size={20} />
        </div>
        <div
          className={cn(
            "absolute transition-all duration-300 transform",
            menuToggle
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0",
          )}
        >
          <X size={20} className="text-destructive" />
        </div>
      </Button>
    </>
  );
}

export default MenuToggle;
