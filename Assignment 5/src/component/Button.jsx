import React from "react";
import "./calculator.css";
const Button = ({ label, onClick }) => {
  return <button onClick={() => onClick(label)}>{label}</button>;
};

export default Button;
