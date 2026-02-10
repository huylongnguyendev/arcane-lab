import { createBox } from "magos"

const initialState = 0

export const counterBox = createBox(initialState, (set) => ({
  inc: () => set(prev => prev + 1)
}))