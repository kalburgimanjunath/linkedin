import React from "react";
import "./css/TopNav.css";
export default function TopNav() {
  const menuitem = [
    "Home",
    "My Network",
    "Jobs",
    "Messaging",
    "Notifications",
    "Me"
  ];
  return (
    <div className="topmenu">
      {menuitem.map(item => {
        return (
          <div className="topmenu-item" key={item}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
