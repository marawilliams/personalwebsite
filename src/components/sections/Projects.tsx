import { FunctionComponent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/Projects.module.css";
import { select } from "framer-motion/client";

const cards = [
  { id: 1, title: "Project One", image: "/assets/greenbrier.png", description: "This is project one details." ,
    renderExpanded: () => (
      <div>
        <img src="/assets/greenbrierexpanded.png" alt="Project One Preview" style={{ width: '100%' }} />

      </div>
    ),},
  { id: 2, title: "Project Two", image: "/assets/websitecard.png", description: "This is project two details.",
    renderExpanded: () => (
      <div>
        <img src="/assets/websiteexpanded.png" alt="Project Two Preview" style={{ width: '100%' }} />
        <p className={styles.website}>
          Check out the GitHub{" "}
        <a href="https://github.com/marawilliams/personalwebsite" target="_blank" rel="noopener noreferrer"  className={styles.link}>
        here
      </a>
    !
    </p>
      </div>
    ), },
  { id: 3, title: "Project Three", image: "/assets/h20polomerch.png", description: "More information here." ,
    renderExpanded: () => (
      <div>
        <img src="/assets/waterpoloexpanded.png" alt="Project Two Preview" style={{ width: '100%' }} />
      </div>
    ),},
  { id: 4, title: "Project Four", image: "/assets/paperdragons.png", description: "Details about project four." ,
    renderExpanded: () => (
      <div>
        <img src="/assets/paperdragonexpanded.png" alt="Project Two Preview" style={{ width: '100%' }} />
      </div>
    ),},
  { id: 5, title: "Project Five", image: "/assets/climbingmerch.png", description: "Description for project five." ,
    renderExpanded: () => (
      <div>
        <img src="/assets/climbingexpanded.png" alt="Project Two Preview" style={{ width: '100%' }} />
      </div>
    ),},
  { id: 6, title: "Project Six", image: "/assets/digitalvinyl.png", description: "Insights on project six." ,
    renderExpanded: () => (
      <div>
        <div className={styles.videoContainer}>
          <img src="/assets/recordexpanded.png" alt="Project Two Preview" style={{ width: '100%' }} />
          <video className = {styles.video} src="/assets/recordvideo.MOV" controls width="100%" />
          <img src="/assets/starvinyl.png" alt="Project Two Preview"  className = {styles.starvinyl}/>
          <img src="/assets/soundon.png" alt="Project Two Preview"  className = {styles.sound}/>

        </div>
         </div>
    ),},
];

const Projects: FunctionComponent = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className={styles.section} id="projects">
      <div className={styles.rectangle}>
        <h2 className={styles.header}>projects</h2>

        <div className={styles.grid}>
          {cards.map((card) => (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}`}
              className={styles.card}
              onClick={() => setActiveId(card.id)}
            >
              <img src={card.image} alt={card.title} className={styles.cardImage} />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeId && (
            <motion.div
              layoutId={`card-${activeId}`}
              className={styles.expandedCard}
              onClick={() => setActiveId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {cards.find((c) => c.id === activeId)?.renderExpanded() }
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
