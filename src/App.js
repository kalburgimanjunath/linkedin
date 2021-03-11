import React from "react";
import "./style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentHolder from "./components/ContentHolder";
export default function App() {
  return (
    <div>
      <Header />
      <ContentHolder />
      <Footer />
    </div>
  );
}
