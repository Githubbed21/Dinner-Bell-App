import React from "react";
import axios from "axios";

function PostForm(props) {
  return (
    <div>
      <form>
        <input placeholder="name" type="text"></input>
        <input placeholder="date" type="date"></input>
        <input placeholder="recipie" type="recipe"></input>
      </form>

    </div>
  );
}

export default PostForm;