import { useCounter } from "./custom-hooks/useCounter";

function App() {
  const [count, increment] = useCounter();

  return (
    <>
      <div className="display">
        <p>Button has been clicked {count} times</p>
      </div>
      <button onClick={increment}>Click me</button>
    </>
  );
}

export default App;
