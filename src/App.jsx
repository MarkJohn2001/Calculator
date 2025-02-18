import { useState } from "react";
import "./App.css";
import BasicCalculator from "./BasicCalculator"; // Import this

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  const stringCalculator = "Caculate!";
  return (
    <main>
    <div className="calculator">
    <h2>Count: <span class="count1">{count}</span></h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

      <BasicCalculator sample={stringCalculator} /> {}
    </div>
    </main>
  );
}

export default App;
