import { FunctionComponent } from "react";
import styles from "../../styles/Skills.module.css";
import SkillCategory from "../skills/SkillCategory";


const dotImages = {
  empty: "/assets/level3_empty.png",
  "1": "/assets/level1_filled.png",
  "1.5": "/assets/level2_halffilled.png",
  "2": "/assets/level2_filled.png",
  "2.5": "/assets/level3_halffilled.png",
  "3": "/assets/level3_filled.png",
  "3.5": "/assets/level4_halffilled.png",
  "4": "/assets/level4_filled.png",
  "4.5": "/assets/level5_halffilled.png",
  "empty-3": "/assets/level3_empty.png",
  "empty-4": "/assets/level4_empty.png",
  "empty-5": "/assets/level5_empty.png",
};

const SkillSection: React.FC = () => {
  const Software = [
    {name: "java", level: 3},
    {name: "C", level: 3},
    {name: "python", level: 2.5},
  ];

  const Design = [
    {name: "photoshop", level: 3},
    {name: "illustrator", level: 4},
    {name: "figma", level: 1.5},
    {name: "procreate", level: 4.5},
  ];

  const Art =[
    {name: "graphite", level: 4},
    {name: "painting", level: 3.5},
    {name: "digital", level: 3.5},
  ];

  const Other = [
    {name: "soldering", level: 4},
    {name: "laser cutting", level: 3},
    {name: "3D printing", level: 2.5},
  ];

    return (
    <section className={styles.section} id="art">
      <div className={styles.rectangle}>
        <img src = "/assets/skillsicon.png" alt = "Decorative" className = {styles.icon}/>
        <img src = "/assets/skillsstar1.png" alt = "Decorative" className = {styles.star1}/>
        <img src = "/assets/skillsstar2.png" alt = "Decorative" className = {styles.star2}/>
        <img src = "/assets/skillsstar3.png" alt = "Decorative" className = {styles.star3}/>
        <img src = "/assets/skillsdecor.png" alt = "Decorative" className = {styles.decor}/>
        <h2 className={styles.header}>skills</h2>
        <div className = {styles.skillscontainer}>
          <SkillCategory title="Software" skills = {Software} dotImages={dotImages}/>
          <SkillCategory title="Design" skills = {Design} dotImages={dotImages}/>
          <SkillCategory title="Art" skills = {Art} dotImages={dotImages}/>
          <SkillCategory title="Other" skills = {Other} dotImages={dotImages}/>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
