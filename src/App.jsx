import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import "./app.scss";
import { useState } from "react";
import NavMenu from "./components/navMenu/NavMenu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
