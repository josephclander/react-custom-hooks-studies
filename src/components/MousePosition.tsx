import { useEffect, useState } from "react";

const MousePosition = () => {
  const [xPos, setXPos] = useState<number | null>(null);
  const [yPos, setYPos] = useState<number | null>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      setXPos(event.offsetX);
      setYPos(event.offsetX);
    });

    return () => {
      document.removeEventListener("mousemove", (event) => {
        setXPos(event.offsetX);
        setYPos(event.offsetY);
      });
    };
  }, [xPos, yPos]);

  return (
    <section>
      <h2>Heading</h2>
      <div className="display">
        <p>x: {xPos}</p>
        <p>y: {yPos}</p>
      </div>
    </section>
  );
};

export default MousePosition;
