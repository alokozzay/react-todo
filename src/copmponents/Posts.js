import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../style/Post.css";
import PostItem from "./PostItem";
import "./Posts.css";

export default function Posts({ posts, title, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAling: "center" }}>Posts list none:(</h1>;
  }

  return (
    <div>
      <h1 style={{ marginTop: "20px" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="item">
              <PostItem remove={remove} number={index + 1} post={post} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}
