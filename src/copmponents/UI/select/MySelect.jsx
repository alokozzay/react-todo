import React from "react";
import classes from "./MySelect.module.css";

export default function MySelect({ options, defaultOption, value, onSort }) {
  return (
    <select
      className={classes.myselect}
      value={value}
      onChange={(e) => onSort(e.target.value)}
    >
      <option className={classes.myoption} disabled={true} value="default">
        {defaultOption}
      </option>
      {options.map((opt) => (
        <option key={opt.value} className={classes.myoption} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
}
