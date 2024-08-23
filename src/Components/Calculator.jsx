import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '←') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator-main-container">
    <div className="calculator-container">
      <center>
        <h1>Calculator</h1>
      </center>
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          {['7', '8', '9', '/'].map((item) => (
            <button key={item} onClick={() => handleClick(item)}>
              {item}
            </button>
          ))}
          {['4', '5', '6', '*'].map((item) => (
            <button key={item} onClick={() => handleClick(item)}>
              {item}
            </button>
          ))}
          {['1', '2', '3', '-'].map((item) => (
            <button key={item} onClick={() => handleClick(item)}>
              {item}
            </button>
          ))}
          {['0', '.', '=', '+'].map((item) => (
            <button key={item} onClick={() => handleClick(item)}>
              {item}
            </button>
          ))}
          <button onClick={() => handleClick('C')}>C</button>
          <button onClick={() => handleClick('←')}>←</button>
        </div>
      </div>
    </div>
    </div>
  );
}
