const Calculator = () => (
  <div className="calc">
    <div className="calc-header">
      <h2>Maths can smile</h2>
    </div>

    <div className="calc-container">
      <div className="display">0</div>

      <div className="container">

        <div className="main-calc">

          <div className="calc-top">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
          </div>

          <div className="digits-numbers">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
          </div>
          <div className="calc-bottom">
            <button type="button">.</button>
            <button type="button" className="btn0">0</button>
          </div>
        </div>

        <div className="operators">
          <button type="button">÷</button>
          <button type="button">x</button>
          <button type="button">-</button>
          <button type="button">+</button>
          <button type="button">=</button>
        </div>
      </div>

    </div>
  </div>
);

export default Calculator;
