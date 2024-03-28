import { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [xPos, setXPos] = useState<number | null>(null);
  const [yPos, setYPos] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setXPos(event.offsetX);
      setYPos(event.offsetY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
    // removed xPos and yPos from dependency array
    // the event listener is taking care of the values
    // so even though the values change,
    // it's not based on logic in state.
  }, []);

  return {xPos, yPos};
};