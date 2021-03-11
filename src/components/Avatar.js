import React from "react";
import "./css/Avatar.css";
export default function Avatar({
  src = "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
}) {
  const user = {
    name: "Jill E Duffy",
    designation: "Freelance Technology Writer"
  };
  return (
    <div className="Avatar">
      <div className="image">
        <img src={src} />
      </div>
      <div className="name">{user.name}</div>
      <br />
      <div className="designation">{user.designation}</div>
    </div>
  );
}
