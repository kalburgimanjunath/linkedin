import React from "react";
export default function Header() {
  const footer = [
    "About",
    "Community Guidances",
    "Accessibility",
    "Careers",
    "Talent Solutions",
    "Marketing Solutions",
    "Questions?",
    "Feedback",
    "Privacy & Terms"
  ];
  return (
    <>
      <div className="footer">
        {footer.map(item => {
          return <a href="">{item}</a>;
        })}
      </div>
      <div>Linkedin Corp.@2015</div>
    </>
  );
}
