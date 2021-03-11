import React from "react";
import Comments from "./comments";
export default function posts() {
  const posts = [
    {
      title: "test",
      image: "",
      description: ""
    }
  ];
  return (
    <div>
      <h1>Posts</h1>
      <div>Title</div>
      <div>image</div>
      <div>Description</div>
      <div>
        <div>
          <a href="">Like</a>
          <a href="">Comment</a>
          <a href="">Share</a>
          <a href="">count likes</a>
          <a href="">count comments</a>
        </div>
      </div>
      <Comments />
    </div>
  );
}
