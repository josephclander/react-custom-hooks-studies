import { useState } from "react";

export default function useCounter() {
const [counter, setCounter] = useState<number>(0);

  function handleClick(): void {
    setCounter((prev) => prev + 1);
  }

  return {counter, handleClick}
}