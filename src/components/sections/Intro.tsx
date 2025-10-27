import { FunctionComponent } from "react";
import styles from "../../styles/Intro.module.css";

const Intro: FunctionComponent = () => {
  return (
    <section className={styles.section}>
      <img
          src = "../../../public/assets/profile.png"
          alt = "Decorative"
          className = {styles.image}
      />
      <h2 className={styles.header}>Section Title</h2>
      <p>Content goes here...</p>
    </section>
  );
};

export default Intro;