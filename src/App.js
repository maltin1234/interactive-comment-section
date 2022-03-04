import React from "react";
import "../src/App.css";
import avatar from "./images/avatars/image-amyrobson.png";
import reply from "./images/icon-reply.svg";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card__column card__column--first">
          <button className="button__left--icon">+</button>{" "}
          <button className="button__left--icon">12</button>
          <button className="button__left--icon">-</button>
        </div>
        <div className="card__column  card__column--second">
          <div className="card__row card__row--first">
            <img className="content img-avatar" alt="" src={avatar}></img>
            <p className="content text-username">Amy Robson</p>
            <p className="content text">1 may 2022</p>
            <img className="content img-reply" alt="" src={reply}></img>
          </div>

          <div className="card__row card__row--second">
            <p className="text main-content">
              I couldn't agree more with this. Everything moves so fast and it
              always seems like everyone knows the newest library/framework. But
              the fundamentals are what stay constant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
