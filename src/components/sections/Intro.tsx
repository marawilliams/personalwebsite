import { FunctionComponent } from "react";
import styles from "../../styles/Intro.module.css";

const BasicSection: FunctionComponent = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Section Title</h2>
      <p>Content goes here...</p>
    </section>
  );
};

export default BasicSection;