import React from "react";
import Avatar from "./Avatar";
export default function Widget({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <Avatar />
    </div>
  );
}
