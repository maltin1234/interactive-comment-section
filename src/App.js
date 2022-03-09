import React, { useState } from "react";
import "../src/App.css";

import { useEffect } from "react";
import axios from "axios";
import CardComponent from "./components/CardComponent";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await axios.get(`http://localhost:3004/comments`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(result);
      setData(result.data);

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      {data.map((x) => (
        <CardComponent key={x.id} id={x.id} content={x.content} />
      ))}
    </div>
  );
}

export default App;
