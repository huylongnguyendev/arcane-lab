"use client"

import { store } from "@/store/store"
import { useAppStore } from "magos/react"

export default function Home() {
  const [count, setCount] = useAppStore(store.counter)

  return (
    <>
      <h1 className="text-primary">{count}</h1>
      <button onClick={setCount.inc}>Increase</button>
    </>
  )
}
