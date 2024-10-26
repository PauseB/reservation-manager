import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-3">
      <p>{ count }</p>
      <Button onClick={() => setCount(n => n + 1)}>add 1</Button>
      <Button onClick={() => setCount(n => 2 * n)}>double</Button>
      <Button onClick={() => setCount(0)}>reset</Button>
    </div>
  )
}