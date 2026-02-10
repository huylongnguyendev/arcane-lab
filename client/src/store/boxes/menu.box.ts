import { createBox } from "magos";

const menuToggle: boolean = false;

export const menuBox = createBox(menuToggle, (set) => ({
  setToggle: () => set((prev) => !prev),
}));
