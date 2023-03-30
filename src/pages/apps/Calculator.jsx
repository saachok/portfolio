import { useEffect } from 'react';
import '../../projects/calculator/styles.css';

const Calculator = () => {
  useEffect(() => {
    let display = document.getElementById('display');
    let buttons = Array.from(document.getElementsByClassName('calc-button'));

    buttons.forEach((button) => {
      button.addEventListener('click', (element) => {
        switch (element.target.innerText) {
          case 'AC':
            display.innerText = '';
            break;
          case '=':
            try {
              display.innerText = eval(display.innerText);
            } catch {
              display.innerText = 'Error!';
            }
            break;
          default:
            display.innerText += element.target.innerText;
        }
      });
    });
  }, []);

  return (
    <div className="body-container">
      <div className="calculator">
        <div id="display"></div>

        <div className="calculator-buttons">
          <button className="calc-button clear">AC</button>

          <button className="calc-button">7</button>
          <button className="calc-button">8</button>
          <button className="calc-button">9</button>
          <button className="calc-button">/</button>

          <button className="calc-button">4</button>
          <button className="calc-button">5</button>
          <button className="calc-button">6</button>
          <button className="calc-button">*</button>

          <button className="calc-button">1</button>
          <button className="calc-button">2</button>
          <button className="calc-button">3</button>
          <button className="calc-button">-</button>

          <button className="calc-button">0</button>
          <button className="calc-button">.</button>
          <button className="calc-button">+</button>
          <button className="calc-button equal">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
