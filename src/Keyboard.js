import "./Keyboard.css";
const Keyboard = () => {
  return (
    <div>
      <div className="row">
        <div className="board">
          0
        </div>
      </div>
      <div className="keyboard">
        <div className="row">
          <div className="key">AC</div>
          <div className="key">v</div>
          <div className="key2">%</div>
          <div className="key2">+-</div>
          <div className="key ">/</div>
        </div>
        <div className="row">
          <div className="key background-color1">7</div>
          <div className="key background-color1">8</div>
          <div className="key background-color1">9</div>
          <div className="key">x</div>
        </div>
        <div className="row">
          <div className="key background-color1">4</div>
          <div className="key background-color1">5</div>
          <div className="key background-color1">6</div>
          <div className="key">-</div>
        </div>
        <div className="row">
          <div className="key background-color1">1</div>
          <div className="key background-color1">2</div>
          <div className="key background-color1">3</div>
          <div className="key">+</div>
        </div>
        <div className="row">
          <div className="key background-color1">0</div>
          <div className="key background-color1">.</div>
          <div className="key2 background-color1">(</div>
          <div className="key2 background-color1">)</div>
          <div className="key background-color2">=</div>
        </div>
      </div>
    </div>
  );
};
export default Keyboard;
