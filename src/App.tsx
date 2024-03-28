import { useCounter } from "./custom-hooks/useCounter";

function App() {
  const [count, increment] = useCounter();

  return (
    <section className="container">
      <h2>useCounter()</h2>
      <div className="display">
        <p>Button has been clicked {count} times</p>
      </div>
      <button onClick={increment}>Click me</button>
    </section>
  );
}

export default App;
