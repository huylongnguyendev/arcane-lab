import { createStore } from "magos"
import { counterBox } from "./boxes/counter.box"

export const store = createStore({
  counter: counterBox
})