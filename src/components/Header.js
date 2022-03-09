import React from "react";

const Header = ({ avatar, reply }) => {
  return (
    <div className="card__row card__row--first">
      <img className="content img-avatar" alt="" src={avatar}></img>
      <p className="content text-username">Amy Robson</p>
      <p className="content text-date">1 may 2022</p>
      <img className="content img-reply" alt="reply" src={reply}></img>
    </div>
  );
};

export default Header;
