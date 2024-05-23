import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to={`/detail/${Math.floor(Math.random() * 10) + 1}`}>
        Detail로 가기
      </Link>
    </div>
  );
};

export default Home;
