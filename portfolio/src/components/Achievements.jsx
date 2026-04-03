import styles from "./Achievements.module.css";

const Achievements = () => {
  return (
    <section id="achievements" className={styles.container}>
      <h2>Achievements</h2>
      <ul>
       
        <li>Completed Full Stack Web Development Course</li>
        <li>Built 10+ mini projects using React</li>
      </ul>
    </section>
  );
};

export default Achievements;
