import { FunctionComponent } from "react";
import styles from "../../styles/Education.module.css";

const Education: FunctionComponent = () => {
  return (
    <section className={styles.section} id="education">
      <div className={styles.rectangle}>
        <h2 className={styles.header}>education</h2>
        {/* Content inside the rectangle */}
        <p>Example skills content here</p>
      </div>
    </section>
  );
};

export default Education;
