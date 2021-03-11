import React from "react";
import About from "./About";
import Featured from "./Featured";
import Userdashboard from "./userdashboard";
import UserActivity from "./UserActivity";
import Experience from "./Experience";
import Education from "./Education";
import Licenses from "./Licenses";
import About from "./About";
import About from "./About";
import About from "./About";
import About from "./About";
export default function SubCards({ type, details }) {
  console.log(type);

  return (
    <div>
      {type === "about" ? <About title={type} /> : ""}
      {type === "featured" ? <Featured title={type} /> : ""}
      {type === "your dashboard" ? <Userdashboard title={type} /> : ""}
      {type === "activity" ? <UserActivity title={type} /> : ""}
      {type === "experience" ? <Experience title={type} /> : ""}
      {type === "education" ? <Education title={type} /> : ""}
      {type === "licenses & certifications" ? <Licenses title={type} /> : ""}
      {type === "skills & endorsements" ? <About title={type} /> : ""}
      {type === "accomplishments" ? <About title={type} /> : ""}
      {type === "interests" ? <About title={type} /> : ""}
    </div>
  );
}
