import { useState } from 'react';
import Display from './Display';
import calculate from './logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: 0, operation: undefined });

  const EventHandler = (event) => {
    const output = calculate(state, event.target.textContent);
    setState((state) => ({ ...state, ...output }));
  };

  const { total, next } = state;

  return (
    <div className="calc">
      <div className="calc-header">
        <h2>Maths can smile</h2>
      </div>

      <div className="calc-container">
        <Display output={next || total || 0} />

        <div className="container">

          <div className="main-calc">

            <div className="calc-top">
              <button type="button" onClick={EventHandler}>AC</button>
              <button type="button" onClick={EventHandler}>+/-</button>
              <button type="button" onClick={EventHandler}>%</button>
            </div>

            <div className="digits-numbers">
              <button type="button" onClick={EventHandler}>7</button>
              <button type="button" onClick={EventHandler}>8</button>
              <button type="button" onClick={EventHandler}>9</button>
              <button type="button" onClick={EventHandler}>4</button>
              <button type="button" onClick={EventHandler}>5</button>
              <button type="button" onClick={EventHandler}>6</button>
              <button type="button" onClick={EventHandler}>1</button>
              <button type="button" onClick={EventHandler}>2</button>
              <button type="button" onClick={EventHandler}>3</button>
            </div>
            <div className="calc-bottom">
              <button type="button" onClick={EventHandler}>.</button>
              <button type="button" className="btn0" onClick={EventHandler}>0</button>
            </div>
          </div>

          <div className="operators">
            <button type="button" onClick={EventHandler}>÷</button>
            <button type="button" onClick={EventHandler}>x</button>
            <button type="button" onClick={EventHandler}>-</button>
            <button type="button" onClick={EventHandler}>+</button>
            <button type="button" onClick={EventHandler}>=</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Calculator;
