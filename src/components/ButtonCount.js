import React from "react";

function ButtonCount() {
  return (
    <div className="card__column card__column--first">
      <button className="button__left--icon">+</button>{" "}
      <button className="button__left--icon">12</button>
      <button className="button__left--icon">-</button>
    </div>
  );
}

export default ButtonCount;
