import React from "react";
import ButtonCount from "../components/ButtonCount";
import Header from "../components/Header";
import Main from "../components/Main";
import avatar from "../images/avatars/image-amyrobson.png";
import reply from "../images/icon-reply.svg";
import "../components/CardComponent.css";

import { useEffect, useState } from "react";
import axios from "axios";

function CardComponent({ id, content }) {
  //useState
  const [arrReplies, setReplies] = useState([]);
  useEffect(() => {
    fetchReplies();
  }, []);
  const [arrComments, setComments] = useState([]);

  // Reply logic

  async function fetchReplies() {
    try {
      const reply = await axios.get(`http://localhost:3004/comments`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(reply);
      setComments(reply.data);
      console.log(reply.data[1].replies[0].replyingTo);
    } catch (error) {
      console.error(error);
    }
  }
  const fetchComments = () => {
    console.log(arrReplies[0], "arrReplies[0]");
    for (let index = 0; index < arrComments.length; index++) {
      if (arrComments[index].replies.length === 0) {
        console.log("array empty");
      } else {
        setReplies(arrComments[index].replies.length === 0);
      }
    }
  };

  // comment logic

  // end
  function test() {
    console.log("test", arrReplies);
  }
  fetchComments();
  test();
  return (
    <div className="card">
      <ButtonCount />
      <div className="card__column  card__column--second">
        <Header avatar={avatar} reply={reply} />
        <Main content={content} />
      </div>
    </div>
  );
}

export default CardComponent;
