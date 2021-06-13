import "./Calculator.css";
import Keyboard from "./Keyboard";
const Calculator = () => {
  return (
    <div className="calculator">
      <div className="history">
        <div>
          <i class="fa fa-history historyicon"></i>
        </div>
        <div className="historyvalue">5000</div>
      </div>
      <div className="result">
        <div>0</div>
      </div>
      <div className="key-board">
        <Keyboard />
      </div>
      <div className="footer"></div>
    </div>
  );
};
export default Calculator;
