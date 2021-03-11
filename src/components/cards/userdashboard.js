import React from "react";
export default function Userdashboard({ title }) {
  const details = "dashboard";
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <div className="buttons">
          <ul>
            <li>49 Who viewed your profile</li>
            <li>493 Post views</li>
            <li>4 Search appearances</li>
          </ul>
        </div>
        <div className="buttons">
          <ul>
            <li>Salary insights</li>
            <li>My items</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
