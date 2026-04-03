import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = ({ setActivePage, activePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (page) => {
    setActivePage(page);
    setMenuOpen(false); 
  };

  return (
    <nav className={styles.container}>
      <h2 className={styles.title}>Portfolio</h2>

     

      <ul className={`${styles.itemlist} ${menuOpen ? styles.active : ""}`}>
        <li>
          <button
            className={activePage === "home" ? styles.activeButton : ""}
            onClick={() => handleClick("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={activePage === "qualification" ? styles.activeButton : ""}
            onClick={() => handleClick("qualification")}
          >
            Qualification
          </button>
        </li>
        <li>
          <button
            className={activePage === "projects" ? styles.activeButton : ""}
            onClick={() => handleClick("projects")}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            className={activePage === "achievements" ? styles.activeButton : ""}
            onClick={() => handleClick("achievements")}
          >
            Achievements
          </button>
        </li>
        <li>
          <button
            className={activePage === "experience" ? styles.activeButton : ""}
            onClick={() => handleClick("experience")}
          >
            Experience
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
