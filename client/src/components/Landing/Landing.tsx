import { url } from "node:inspector";
import React from "react";
import "./Landing.scss";
import landing from "../../resources/landing.jpg";
import pdf from "../../resources/resume.pdf";

function Landing(): JSX.Element {
  return (
    <div
      id="landingContainer"
      style={{
        backgroundImage: `url(${landing})`,
        backgroundPosition: "center 70%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "snow",
        height: "100vh",
      }}
    >
      <a href={pdf} target="_blank">
        RESUME
      </a>
      <h1 style={{ margin: "0px" }}>Hi there</h1>
      <h2>My name is Asif Uddin</h2>
      <a href="#aboutContainer">About Me</a>
      <a href="#projectsContainer">See my work</a>
    </div>
  );
}

export default Landing;
