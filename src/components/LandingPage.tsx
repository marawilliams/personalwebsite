"use client";
import { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className={styles.landingPage}>
      <div className={styles.mush}>
        <img
          className={styles.mush1Icon}
          src="/assets/mush1.png"
          alt="Mushroom illustration"
          style={{ cursor: 'pointer' }}
          onClick={() => router.push("/mainpage")} // navigates to /mainpage
        />
      </div>
    </div>
  );
};

export default LandingPage;
