import { FunctionComponent } from "react";
import styles from "../../styles/Work.module.css";

const Work: FunctionComponent = () => {
  return (
    <section className={styles.section} id="work">
      <div className={styles.rectangle}>
        <h2 className={styles.header}>work</h2>
        {/* Content inside the rectangle */}
        <p>Example skills content here</p>
      </div>
    </section>
  );
};

export default Work;
