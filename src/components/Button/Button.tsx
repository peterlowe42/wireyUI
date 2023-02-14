import React, { MouseEventHandler } from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler;
}

const Button = (props: ButtonProps):JSX.Element => {
  return <button className="wu-btn" aria-label={props.label} onClick={props.onClick}>{props.label}</button>;
};

export default Button;