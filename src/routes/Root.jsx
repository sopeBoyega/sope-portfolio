import React from "react";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}
