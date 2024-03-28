import { useState } from "react";

function App() {
  const [counter, setCounter] = useState<number>(0);

  function handleClick(): void {
    setCounter((prev) => prev + 1);
  }

  return (
    <>
      <div className="display">
        <p>Button has been clicked {counter} times</p>
      </div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
