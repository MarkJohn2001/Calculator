import { useState } from "react";

function BasicCalculator({ sample }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  function handleAddition() {
    setResult(parseFloat(num1) + parseFloat(num2));
    setNum1(""); 
    setNum2(""); 
  }

  function handleSubtraction() {
    setResult(parseFloat(num1) - parseFloat(num2));
    setNum1(""); 
    setNum2(""); 
  }

  function handleMultiplication() {
    setResult(parseFloat(num1) * parseFloat(num2));
    setNum1(""); 
    setNum2(""); 
  }

  function handleDivision() {
    if (parseFloat(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(parseFloat(num1) / parseFloat(num2));
    }
    setNum1(""); 
    setNum2(""); 
  }

  function handleReset() {
    setNum1("");
    setNum2("");
    setResult(null);
  }

  return (
    <div className="calculator">
      <h3>{sample}</h3>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="buttons">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <button onClick={handleReset}>Reset</button>
      {result !== null && (
    <h4 className="result" onClick={() => { setNum1(""); setNum2(""); setResult(null); }}>
      Result: {result}
    </h4>
  )}
    </div>
  );
}

export default BasicCalculator;
