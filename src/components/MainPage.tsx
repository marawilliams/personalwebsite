"use client";

import styles from "../styles/MainPage.module.css";
import Nav from "../components/Nav";
import Button from "../components/NavButton";
import Skills from "../components/sections/Skills";
import Intro from "../components/sections/Intro";
import Projects from "../components/sections/Projects";
import Art from "../components/sections/Art";
import Education from "../components/sections/Education";
import Work from "../components/sections/Work";
import About from "../components/sections/About";




export default function MainPage(){

    return (
        <div className = {styles.MainPage}>
            <Nav className={styles.navigation}>
                <div className={styles.navContent}>
                <a href="#intro" className={styles.imageButton}></a>
                <a href="#skills" className={styles.navLink}>
                            <Button text="skills" />
                </a>
                <a href="#projects" className={styles.navLink}>
                            <Button text="projects" />
                </a>
                <a href="#artsection" className={styles.navLink}>
                            <Button text="art" />
                </a>
                <a href="#education" className={styles.navLink}>
                            <Button text="education" />
                </a>
                <a href="#work" className={styles.navLink}>
                            <Button text="work" />
                </a>
                <a href="#about" className={styles.navLink}>
                            <Button text="about" />
                </a>
            </div></Nav>

            <div id="intro" className={styles.section}>
                <Intro />
            </div>
            <div id="skills" className={styles.section}>
                <Skills />
            </div>
            <div id="projects" className={styles.section}>
                <Projects />
            </div>
            <div id="artsection" className={styles.section}>
                <Art />
            </div>
            <div id="education" className={styles.section}>
                <Education />
            </div>
            <div id="work" className={styles.section}>
                <Work />
            </div>
            <div id="about" className={styles.section}>
                <About />
            </div>
        </div>
    )
}