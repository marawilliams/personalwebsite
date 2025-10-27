import { FunctionComponent } from "react";
import styles from "../../styles/Skills.module.css";

const Skills: FunctionComponent = () => {
  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.rectangle}>
        <h2 className={styles.header}>skills</h2>
        {/* Content inside the rectangle */}
        <p>Example skills content here</p>
      </div>
    </section>
  );
};

export default Skills;
