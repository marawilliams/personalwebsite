import React from "react";
import styles from "../../styles/Skills.module.css";

interface SkillDotsProps {

    level: number;

    max?: number;

    dotImages: {
        empty : string;
        [key: string]: string;
};
}

const SkillDots: React.FC<SkillDotsProps> = ({ level, max = 5, dotImages}) => {
    const dots = Array.from({ length: max}, (_, i) => {
        const position = i + 1;

        let imageSrc = dotImages[`empty-${Math.floor(level)}`] || dotImages.empty;

        if(position <= Math.floor(level)) {

            imageSrc = dotImages[String(position)] || dotImages.empty;
        } else if (position - 0.5 === level) {
            imageSrc = dotImages[String(position-0.5)] || dotImages.empty;
        }

    return (
        <img
            key={i}
            src = {imageSrc}
            alt= {'Dot ${i+1}'}
            className ={styles.skilldot}
        />
     );
    });
    
    return <div className={styles.skilldots}>{dots}</div>;
};
export default SkillDots;