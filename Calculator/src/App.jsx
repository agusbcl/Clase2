import React, { useState } from 'react';
import './App.css';

function App() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  function addition() {
    setResult(firstNumber + secondNumber)
  }
  function subtraction() {
    setResult(firstNumber - secondNumber)
  }
  function multiplication() {
    setResult(firstNumber * secondNumber)
  }
  function division() {
    if (secondNumber != 0) {
      setResult(firstNumber / secondNumber);
    } else {
      setResult("NaN");
    }
  }
  function reset() {
    setResult(null);
    setFirstNumber(0);
    setSecondNumber(0);
  }

  return (
    <div className='container'>
      <h1>Calculadora</h1>

      <div className='firstNumber'>
        <p>Primer numero:</p>
        <input type="number" value={firstNumber} onChange={e => setFirstNumber(+e.target.value)} />
      </div>

      <div className='secondNumber'>
        <p>Segundo numero:</p>
        <input type="number" value={secondNumber} onChange={e => setSecondNumber(+e.target.value)} />
      </div>

      <div className='buttonContainer'>
        <button onClick={addition} id='addition'>+</button>
        <button onClick={subtraction} id='subtraction'>-</button>
        <button onClick={multiplication} id='multiplication'>x</button>
        <button onClick={division} id='division'>/</button>
        <button onClick={reset} id='reset'>C</button>
      </div>

      <div className='resultContainer'>
        <h3>Resultado:</h3>
        <span>{result}</span>
      </div>
    </div>
  )
}
export default App