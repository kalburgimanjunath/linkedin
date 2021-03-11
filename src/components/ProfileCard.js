import React from "react";
import TopNav from "./TopNav";
import Avatar from "./Avatar";

import "./css/ProfileCard.css";
export default function ProfileCard() {
  const user = {
    name: "Jill E Duffy",
    designation: "Freelance Technology Writer",
    location: "Bangalore Urban,Karnataka,India"
  };
  return (
    <>
      <div className="profileCard">
        <Avatar
          src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
          user={user}
        />
        <div>{user.location}</div>
        <div>{user.location}500+ connections</div>
        <div>Contact Info</div>
        <div>
          <a className="btn btn-primary" href="">
            Open to
          </a>
          <a className="btn btn-secondary" href="">
            Add Profile section
          </a>
          <a className="btn btn-secondary" href="">
            More...
          </a>
        </div>
      </div>
    </>
  );
}
