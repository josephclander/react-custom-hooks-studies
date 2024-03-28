import { useCounter } from "../custom-hooks/useCounter";

const Counter = () => {
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
};

export default Counter;
