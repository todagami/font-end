import { useState } from "react";
import "./Calculator.css";
import Keyboard from "./Keyboard";
import { BiHistory } from "react-icons/bi";
const Calculator = () => {
  const [result, setResult] = useState(0);
  const [fomula, setFomula] = useState("");
  return (
    <div className="calculator">
      <div className="history">
        <div>
          <BiHistory color={"#ffff"} />
        </div>
        <div className="historyvalue">{fomula}</div>
      </div>
      <div className="result">
        <div>{result}</div>
      </div>
      <div className="key-board">
        <Keyboard
          onChange={(newFomula) => {
            setFomula(newFomula);
          }}
          onCompute={(newResult) => {
            setResult(newResult);
          }}
        />
      </div>
      <button
        onClick={() => {
          setResult(1);
        }}
      >
        change
      </button>
      <div className="footer"></div>
    </div>
  );
};
export default Calculator;
