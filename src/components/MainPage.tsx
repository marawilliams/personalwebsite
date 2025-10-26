"use client";

import styles from "../styles/MainPage.module.css";
import Nav from "../components/Nav";
import Button from "../components/NavButton";


export default function MainPage(){

    return (
        <div className = {styles.MainPage}>
            <Nav className={styles.navigation}>
                <div className={styles.navContent}>
                <Button text="skills" />
                <Button text="projects" />
                <Button text="art" />
                <Button text="education" />
                <Button text="work" />
                <Button text="about" />
            </div></Nav>
            <h1>This is the main page!</h1>
        </div>
    )
}