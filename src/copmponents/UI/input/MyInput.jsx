import React from "react";
import classes from "./MyInput.module.css";

export default function MyInput({ ...props }) {
  //   console.log(...props);
  return <input className={classes.myinput} {...props} />;
}
