import { FunctionComponent } from "react";
import styles from "../../styles/Intro.module.css";
import { TypeAnimation } from 'react-type-animation';

const Intro: FunctionComponent = () => {
  return (
    <section className={styles.section}>
      <img
          src = "/assets/profile.png"
          alt = "Decorative"
          className = {styles.image}
      />
      <div className = {styles.rectangle}/>
      <div className = {styles.intro}>
        <TypeAnimation
          sequence = {[
            'Hi! My name is Mara...',]}
            wrapper="span"
            speed={1}
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '32px',
              whiteSpace: "pre-line",
              display: "inline",
              }}
            />
      </div>
      <div className = {styles.introparagraph}>
        <p style={{ fontFamily: "'Red Hat Mono', monospace"}}>
        I am an <strong>engineer</strong> and <strong>artist</strong> focused on web-development and mental health technologies. Please look around to learn more about me!
      </p>
      </div>
      
      
    </section>
  );
};

export default Intro;