import "./Keyboard.css";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
const Keyboard = (props) => {
  const [fomula, setFomula] = useState("");
  return (
    <div>
      <div className="row">
        <div className="board">0</div>
      </div>
      <div className="keyboard">
        <div className="row">
          <div
            className="key"
            onClick={() => {
              setFomula("");
              props.onChange("");
            }}
          >
            AC
          </div>
          <div className="key">
            <BsArrowLeft />
          </div>
          <div
            className="key2"
            onClick={() => {
              console.log("%");
            }}
          >
            %
          </div>
          <div
            className="key2"
            onClick={() => {
              console.log("+-");
            }}
          >
            +-
          </div>
          <div
            className="key "
            onClick={() => {
              console.log("/");
            }}
          >
            /
          </div>
        </div>
        <div className="row">
          <div
            className="key background-color1"
            onClick={() => {
              setFomula(fomula + "7");
              props.onChange(fomula + "7");
            }}
          >
            7
          </div>
          <div
            className="key background-color1"
            onClick={() => {
              setFomula(fomula + "8");
              props.onChange(fomula + "8");
            }}
          >
            8
          </div>
          <div
            className="key background-color1"
            onClick={() => {
              setFomula(fomula + "9");
              props.onChange(fomula + "9");
            }}
          >
            9
          </div>
          <div
            className="key"
            onClick={() => {
              setFomula(fomula + "x");
              props.onChange(fomula + "x");
            }}
          >
            x
          </div>
        </div>
        <div className="row">
          <div
            className="key background-color1"
            onClick={() => {
              console.log("4");
            }}
          >
            4
          </div>
          <div
            className="key background-color1"
            onClick={() => {
              console.log("5");
            }}
          >
            5
          </div>
          <div
            className="key background-color1"
            onClick={() => {
              console.log("6");
            }}
          >
            6
          </div>
          <div
            className="key"
            onClick={() => {
              console.log("-");
            }}
          >
            -
          </div>
        </div>
        <div className="row">
          <div
            className="key background-color1"
            onClick={() => {
              console.log("1");
            }}
          >
            1
          </div>
          <div
            className="key background-color1"
            onClick={() => {
              console.log("2");
            }}
          >
            2
          </div>
          <div
            className="key background-color1"
            onClick={() => {
              console.log("3");
            }}
          >
            3
          </div>
          <div
            className="key"
            onClick={() => {
              console.log("+");
            }}
          >
            +
          </div>
        </div>
        <div className="row">
          <div
            className="key background-color1"
            onClick={() => {
              console.log("0");
            }}
          >
            0
          </div>
          <div
            className="key background-color1"
            onClick={() => {
              console.log(".");
            }}
          >
            .
          </div>
          <div
            className="key2 background-color1"
            onClick={() => {
              console.log("(");
            }}
          >
            (
          </div>
          <div
            className="key2 background-color1"
            onClick={() => {
              console.log(")");
            }}
          >
            )
          </div>
          <div
            className="key background-color2"
            onClick={() => {
              props.onCompute(56)
            }}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};
export default Keyboard;
