import React from "react";
import ProfileCard from "./ProfileCard";
import AlertCard from "./AlertCard";
import Posts from "./posts/Posts";
import Sidebar from "./Sidebar";
import "./css/ContentHolder.css";
import SubCards from "./cards/SubCards";

export default function ContentHolder() {
  const cards = [
    "about",
    "featured",
    "your dashboard",
    "activity",
    "experience",
    "education",
    "licenses & certifications",
    "skills & endorsements",
    "recommendations",
    "accomplishments",
    "interests"
  ];
  return (
    <div className="ContentHolder">
      <AlertCard />
      <ProfileCard />

      {cards.map(item => {
        return <SubCards type={item} />;
      })}

      <Posts />
      <Sidebar />
    </div>
  );
}
