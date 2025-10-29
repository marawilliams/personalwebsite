import { FunctionComponent } from "react";
import styles from "../../styles/Art.module.css";

const Art: FunctionComponent = () => {
  return (
    <section id="art" className={styles.section}>
      <div className={styles.rectangle}>
        <h2 className={styles.header}>art</h2>

        <div className={styles.collage}>
          <img src="/assets/character_design_fridge.png" alt="Decorative" className={styles.fridge} />
          <img src="/assets/killua_shirt.png" alt="Decorative" className={styles.killua} />
          <img src="/assets/chalkboard.png" alt="Decorative" className={styles.chalkboard} />
          <img src="/assets/bleach_painting.png" alt="Decorative" className={styles.bleach} />
          <img src="/assets/hand_study.png" alt="Decorative" className={styles.hand} />
          <img src="/assets/character_design_horns.png" alt="Decorative" className={styles.horns} />
          <img src="/assets/luffy.png" alt="Decorative" className={styles.luffy} />
          <img src="/assets/3D_modeling.png" alt="Decorative" className={styles.model3d} />
          <img src="/assets/crochet_sweater.png" alt="Decorative" className={styles.crochet} />
          <img src="/assets/sketch_study.png" alt="Decorative" className={styles.sketch} />
          <img src="/assets/bus_design.png" alt="Decorative" className={styles.bus} />
          <img src="/assets/portrait_study.png" alt="Decorative" className={styles.portrait} />
          <img src="/assets/sage.png" alt="Decorative" className={styles.sage} />
          <img src="/assets/skateboard.png" alt="Decorative" className={styles.skateboard} />
          <img src="/assets/hoodie_design.png" alt="Decorative" className={styles.hoodie} />
          <img src="/assets/fire_character.png" alt="Decorative" className={styles.fire} />
        </div>
      </div>
    </section>
  );
};

export default Art;
