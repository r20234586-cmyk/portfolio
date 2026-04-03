import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h2>My Projects</h2>
      <div className={styles.projects}>
        <div className={styles.card}>
          <h3>Portfolio Website</h3>
          <p>A responsive portfolio built using React and CSS Modules.</p>
        </div>
        <div className={styles.card}>
          <h3>Todo App</h3>
          <p>A React app to manage daily tasks with custom components.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
