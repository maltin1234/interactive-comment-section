import React from "react";
import "../src/App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card__column card__column--first">
          <button className="button__left--icon">Btn</button>
        </div>
        <div className="card__column  card__column--second">
          <div className="card__row card__row--first">
            <p className="text">Avatar</p>
            <p className="text">username</p>
            <p className="text">date</p>
            <p className="text">re</p>
          </div>
          <div className="card__row card__row--second">
            <p>text goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
