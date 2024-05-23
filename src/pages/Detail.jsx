import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const parms = useParams();
  console.log("id : ", parms.id);
  return (
    <div>
      <h2>Detail</h2>
      <p>ID : {parms.id}</p>
      <Link to="/">Home으로 돌아가기</Link>
    </div>
  );
};

export default Detail;
