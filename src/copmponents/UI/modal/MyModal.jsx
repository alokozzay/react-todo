import React from "react";
import classes from "./MyModal.module.css";

export default function MyModal({ children, visibility, setVisibility }) {
  const rootClasses = [classes.myModal];
  if (visibility) {
    rootClasses.push(classes.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisibility(false)}>
      <div
        className={classes.myModal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
