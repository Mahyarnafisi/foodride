import React from "react";
import "./ButtonPrimary.css";
function ButtonPrimary(props) {
  return <button className={`btn-primary ${props.children}`}>{props.children}</button>;
}

export default ButtonPrimary;
