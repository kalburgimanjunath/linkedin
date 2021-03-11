import React from "react";
export default function About({ title }) {
  const details =
    "Experience in Physical Security Domain and enterprise software development , Clinical Trials,FMCG at Oracle, Honeywell R&D Centre,3M India, Bangalore. Lead Frontend develpment for group of Honeywell ACS Software CoE,Oracle,3M India, with responsibility to drive software revenue growth and market differentiation by realizing cutting ed";
  return (
    <div>
      <h1>{title}</h1>
      {details}
    </div>
  );
}
