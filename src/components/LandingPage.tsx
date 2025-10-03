"use client";
import { FunctionComponent } from 'react';
import styles from './LandingPage.module.css';


const LandingPage:FunctionComponent = () => {
  	return (
    		<div className={styles.landingPage}>
      			<div className={styles.mush}>
        				<img className={styles.mush1Icon} alt="" />
      			</div>
      			<div className={styles.letsGo}>
        				<div className={styles.landingPageLetsGo}>let’s go!</div>
      			</div>
    		</div>);
};

export default LandingPage;
