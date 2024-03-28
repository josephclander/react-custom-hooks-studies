import { useMousePosition } from "../custom-hooks/useMousePosition";

const MousePosition = () => {
  const { xPos, yPos } = useMousePosition();

  return (
    <section>
      <h2>useMousePosition()</h2>
      <div className="display">
        <p>x: {xPos}</p>
        <p>y: {yPos}</p>
      </div>
    </section>
  );
};

export default MousePosition;
