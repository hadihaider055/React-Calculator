import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement;
    setResult(result.concat(target.name));
  };
  const handleClear = () => {
    setResult("");
  };
  const handleBackSpace = () => {
    setResult(result.slice(0, -1));
  };
  const handleCalculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Math Error");
    }
  };

  return (
    <div className="calc__calculator">
      <form>
        <input type="text" className="calc__output" value={result} />
      </form>
      <div className="keypad">
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
        <button onClick={handleBackSpace}>C</button>
        <button className="operator" name="/" onClick={handleClick}>
          &divide;
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button className="operator" name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button className="operator" name="-" onClick={handleClick}>
          &ndash;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button className="operator" name="+" onClick={handleClick}>
          +
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button className="equals" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
