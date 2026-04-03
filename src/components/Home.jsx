import styles from "./Home.module.css";

const Home = () => {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.content}>
        <h1>Hello, I'm Manchala Rohith 👋</h1>
        <h2 className={styles.text}>A Passionate Student</h2>
        <p>
          I build responsive and interactive web applications using modern
          technologies like React, Node.js, and Express.
        </p>
       
      </div>
    </section>
  );
};

export default Home;
