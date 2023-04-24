import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Service from "./components/Service";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Service />
      <Experience />
    </>
  );
}

export default App;
