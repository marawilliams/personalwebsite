"use client";

import styles from "../styles/MainPage.module.css";
import Nav from "../components/Nav";
import Button from "../components/NavButton";


export default function MainPage(){

    return (
        <div className = {styles.MainPage}>
            <Nav className={styles.navigation}>
                <div className={styles.navContent}>
                <Button text="Home" />
                <Button text="Dashboard" />
                <Button text="Settings" />
            </div></Nav>
            <h1>This is the main page!</h1>
        </div>
    )
}