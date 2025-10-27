import React from "react";
import SkillItem, { Skill } from "./SkillItem";
import styles from "../../styles/Skills.module.css";


interface SkillCategoryProps {
    title: string;
    skills: Skill[];
    dotImages: {
        empty: string;
        [key: string]: string;
    };
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
    title,
    skills,
    dotImages,
}) => (
        <div className = {styles.skillcategory}>
            <h3>{title}</h3>
            <div className ={styles.skilllist}>
                {skills.map((skill)=> (
                    <SkillItem key = {skill.name} {...skill} dotImages = {dotImages}/>
                ))}
            </div>
        </div>
    );

export default SkillCategory;