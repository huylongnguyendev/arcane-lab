import MenuToggle from "@/components/toggles/MenuToggle";
import ModeToggle from "@/components/toggles/ModeToggle";

function NavInteractive() {
  return (
    <>
      <div className="flex items-center gap-2">
        <MenuToggle />
        <ModeToggle />
      </div>
    </>
  );
}

export default NavInteractive;
