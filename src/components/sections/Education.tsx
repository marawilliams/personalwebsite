import { FunctionComponent } from "react";
import styles from "../../styles/Education.module.css";

const Education: FunctionComponent = () => {
  return (
    <section className={styles.section} id="education">
      <div className={styles.rectangle}>
        <img src = "/assets/skillsicon.png" alt = "Decorative" className = {styles.icon}/>
        <h2 className={styles.header}>education</h2>

        <div className={styles.collage}>
          <div className={styles.degreeInfo}>
            <p className={styles.university}>University of Virginia 2023–2027</p>
            <p className={styles.degree}>B.S Computer Engineering</p>
          </div>

          <div className={styles.gpa}>
            <p>GPA</p>
            <p>3.9</p>
          </div>

          <div className = {styles.coursework}>
            <p>Relevant Coursework:</p>
            <ul className = {styles.bulletlist}>
              <li>Data Structures & Algorithms</li>
              <li>Computer Systems & Organization</li>
              <li>Embedded Systems</li>
              <li>Software Development Essentials</li>
              <li>Applied Circuits</li>
              <li>Engineering Ethics</li>
            </ul>
          </div>

          <div className = {styles.activities}>
            <img
            src = "/assets/educationactivities.png"
            alt = "Decorative"
            className = {styles.educationrectangle}
            />
            <div className = {styles.activitiesbullets}>
              <p>Activities</p>
              <ul className = {styles.activitieslist}>
                <li>Rodman Scholar
                  <ul className = {styles.rodman}>
                    <li>&quot;honors program for the top 5-6% of each class in the engineering school&quot;</li>
                    <li>&quot;selected for their superior academic performance and potential to become the engineering leaders of tomorrow&quot;</li>
                  </ul>
                </li>
                <li>Climbing Team</li>
                <li>Makerspace Technologist</li>
                <li>Psychology Minor</li>
              </ul>
            </div>
          </div>

          <div className = {styles.achievements}>
            <p>Achievements</p>
            <ul className = {styles.achievementslist}>
              <li>DAR Good Citizens Award
                <ul>
                  <li className = {styles.scholarship}>&quot;qualities of dependability, service, leadership, and patriotism&quot;</li>
                </ul>
              </li>
              <li>Charla Ilgner Art with a Heat Crevier Family Foundation Scholarhsip
                <ul>
                  <li className = {styles.scholarship}>&quot;an innovative, create student who participates in... the arts... with a big heart, displays strong character, is unselfish, and shows empathy and concern for others&quot;</li>
                </ul>
              </li>
              <li>Michael G. Smithers Memorial STEM Scholarship</li>
              <li>A. Thomas Young Scholarship</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
