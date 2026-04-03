import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Qualification from "./components/Qualification";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <>
      <Navbar setActivePage={setActivePage} activePage={activePage} />
      {activePage === "home" && <Home />}
      {activePage === "qualification" && <Qualification />}
      {activePage === "projects" && <Projects />}
      {activePage === "achievements" && <Achievements />}
      {activePage === "experience" && <Experience />}
    </>
  );
}

export default App;
