import { createStore } from "magos";
import { counterBox } from "./boxes/counter.box";
import { menuBox } from "./boxes/menu.box";

export const store = createStore({
  counter: counterBox,
  menuToggle: menuBox,
});
