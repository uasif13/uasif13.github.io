import React from "react";
import "./App.css";
import About from "./components/About Me/About";
import Projects from "./components/Projects/Projects";
import Landing from "./components/Landing/Landing";

function App(): JSX.Element {
  return (
    <div>
      <Landing />
      <About />
      <Projects />
    </div>
  );
}

export default App;
