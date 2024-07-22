import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

function Like() {
  const [like, setLike] = useState(false);
  const toggleLike = () => {
    setLike((prev) => !prev);
    console.log(like);
  };
  return (
    <button onClick={toggleLike}>{like ? <FaHeart style={{color: 'red',height: '100%',}}/> : <FaRegHeart />}</button>
  );
}

export default Like;
