// src/components/LandingPage.tsx
"use client";

import { useRouter } from "next/navigation";
import styles from "../styles/LandingPage.module.css";
import LetsGo from "../components/LetsGo";
import Mush from "../components/Mush";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className={styles.landingPage}>
      <Mush
        images={[
          "/assets/mush1.png",
          "/assets/mush2.png",
          "/assets/mush3.png",
          "/assets/mush4.png",
          "/assets/mush5.png",
          "/assets/mush6.png",
          "/assets/mush7.png",
          "/assets/mush8.png",
          "/assets/mush9.png",
          "/assets/mush10.png",
          "/assets/mush11.png",
          "/assets/mush12.png",
        ]}
        size={240}
        onClick={() => router.push("/mainpage")}
      />
      <LetsGo />
    </div>
  );
}
