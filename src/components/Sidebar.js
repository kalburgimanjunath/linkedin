import React from "react";
import Avatar from "./Avatar";
import Widget from "./Widget";
export default function Sidebar() {
  return (
    <div>
      <Widget title="People also viewed" />
      <Widget title="People you may know" />
      <Widget title="Learning" />
    </div>
  );
}
