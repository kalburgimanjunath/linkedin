import React from "react";
import TopNav from "./TopNav";
import "./css/TopBar.css";
export default function TopBar() {
  return (
    <div className="topbar">
      <i className="fa fa-linkedin fa-w-14 fa-2x" />
      <i className="fa fa-bars fa-w-14 fa-2x" />
      <i className="fa fa-search fa-w-14 fa-2x" />
      <i className="fa fa-comments fa-w-14 fa-2x" />
      <i className="fa fa-flag fa-w-14 fa-2x" />
      <i className="fa fa-user fa-2x" />
      <i className="fa fa-user-circle fa-2x" />
      Search bar navigation items
    </div>
  );
}
