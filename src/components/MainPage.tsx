"use client";

import styles from "../styles/MainPage.module.css";
import Nav from "../components/Nav";
import Button from "../components/NavButton";
import Skills from "../components/sections/Skills";
import Intro from "../components/sections/Intro";




export default function MainPage(){

    return (
        <div className = {styles.MainPage}>
            <Nav className={styles.navigation}>
                <div className={styles.navContent}>
                <a href="#intro" className={styles.imageButton}></a>
                <a href="#skills" className={styles.navLink}>
                            <Button text="skills" />
                </a>
                <Button text="projects" />
                <Button text="art" />
                <Button text="education" />
                <Button text="work" />
                <Button text="about" />
            </div></Nav>

            <div id="intro" className={styles.section}>
                <Intro />
            </div>
            <div id="skills" className={styles.section}>
                <Skills />
            </div>
            <h1>This is the main page!</h1>
        </div>
    )
}