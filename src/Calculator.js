import "./Calculator.css";
import Keyboard from "./Keyboard";
const Calculator = () => {
  return (
    <div className="calculator">
      <div className="history"></div>
      <div className="result"></div>
      <div className="keyboard">
        <Keyboard />
      </div>
      <div className="footer"></div>
    </div>
  );
};
export default Calculator;
