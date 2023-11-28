import React, { useState } from "react";
import "./calculator.css";
import Button from "./Button.jsx";
function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      setInput(eval(input).toString());
    } else if (value === "AC") {
      setInput("");
    } else if (value === "Del") {
      setInput(input.slice(0, -1));
    } else {
      setInput((prevState) => prevState + value);
    }
  };
  const buttonlist = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "AC",
    "=",
    "+",
    ".",
    "Del",
  ];
  return (
    <div className="calculator">
      <div className="displaypanel">{input}</div>
      <div className="buttons">
        {buttonlist.map((label) => (
          <Button key={label} onClick={handleClick} label={label} />
        ))}
      </div>
    </div>
  );
}
export default Calculator;
