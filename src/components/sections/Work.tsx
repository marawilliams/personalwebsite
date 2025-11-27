import { FunctionComponent } from "react";
import styles from "../../styles/Work.module.css";
import EmblaCarousel from "../sections/carouselWork";
import { EmblaOptionsType } from 'embla-carousel'
import '../../styles/embla.css'

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Work: FunctionComponent = () => {
  return (
    <section className={styles.section} id="work">
      <div className={styles.rectangle}>
        <h2 className={styles.header}>work</h2>
        <EmblaCarousel options={{ loop: true, containScroll:'trimSnaps' }}>
  <img className = {styles.slides} src="/assets/technologistframe.png" alt="Work 1" />
  <img className = {styles.slides} src="/assets/InternFrame.png" alt="Work 1" />
  <img className = {styles.slides} src="/assets/baristaframe.png" alt="Work 1" />
  <img className = {styles.slides} src="/assets/expeditionsframe.png" alt="Work 1" />
</EmblaCarousel>

      </div>
    </section>
  );
};

export default Work;
