import React from "react";
import SkillDots from "./SkillDots";
import styles from "../../styles/Skills.module.css";

export interface Skill {
    name: string;
    level: number;
}

interface SkillItemProps extends Skill {
    dotImages:{
        empty: string;
        [key: string]: string;
    };
}

const SkillItem: React.FC<SkillItemProps> = ({name, level, dotImages}) => (
    <div className = {styles.skillitem}>
        <span className={styles.skillname}>{name}</span>    
        <SkillDots level={level} dotImages={dotImages}/>
    </div>
);

export default SkillItem;