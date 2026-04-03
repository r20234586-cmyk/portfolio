import styles from "./Qualification.module.css";

const Qualification = () => {
  const qualifications = [
    "B.Tech, Computer Science and Engineering — Gitam University, Vizag (2023–2027) - CGPA: 9.48",
    "Intermediate, MPC — Narayana Jr College - Percentage: 97%",
    "10th — Krishnaveni Talent School - CGPA: 10.0",
  ];

  return (
    <section className={styles.container}>
      <h2>Qualification</h2>
      <ul>
        {qualifications.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Qualification;
