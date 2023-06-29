import React from "react";
import "./ButtonSecondary.css";
function ButtonSecondary(props) {
  return <button className="btn-secondary">{props.children}</button>;
}

export default ButtonSecondary;
