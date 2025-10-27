import { FunctionComponent } from "react";
import styles from "../../styles/About.module.css";

const About: FunctionComponent = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.rectangle}>
        <h2 className={styles.header}>about</h2>
        <p>Example skills content here</p>
      </div>
    </section>
  );
};

export default About;
