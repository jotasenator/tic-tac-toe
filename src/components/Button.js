import React from "react";

export const Button = ({
  id,
  text,
  style,
  handleClick,
  disabled,
  winningCombination
}) => {
  return (
    <button
      id={id}
      className={`${winningCombination?.includes(id) ? "winning" : ""}`}
      disabled={disabled}
      style={style}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
