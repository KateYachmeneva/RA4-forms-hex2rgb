import { useState } from "react";
import "./Converter.css";
import { hexToRgb } from "../../utils/hexToRgb";

const Converter = () => {
  const [hexInput, setHexInput] = useState("");
  const [rgbOutput, setRgbOutput] = useState("rgb(255, 255, 255)");

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setHexInput(value);
    let result = "rgb(..., ..., ...)";
    if (value.length === 7) {
      result = hexToRgb(value) || "Error";
    } else if (value.length > 7) {
      result = "Error";
    }
    setRgbOutput(result);
  };

  const classBackgroundColor = {
    backgroundColor: rgbOutput !== "Error" ? rgbOutput : "red",
  };
  return (
    <div className="wrapper" style={classBackgroundColor}>
      <div className="converter">
        <div>
          <input
            className="input-field"
            type="text"
            onChange={onChangeHandler}
            value={hexInput}
          />
        </div>
        <div>
          <p className="converter-field">{rgbOutput}</p>
        </div>
      </div>
    </div>
  );
};

export default Converter;
