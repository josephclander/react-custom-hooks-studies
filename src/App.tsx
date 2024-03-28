import useCounter from "./custom-hooks/useCounter";

function App() {
  const { counter, handleClick } = useCounter();

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
