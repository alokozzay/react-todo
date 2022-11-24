import React from "react";
import "../style/Post.css";
import MyButton from "./UI/button/MyButton";

export default function PostItem(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <p>{props.post.body}</p>
      </div>

      <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
    </div>
  );
}
