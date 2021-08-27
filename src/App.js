import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import React from "react";

library.add(fab, fas, far);

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
