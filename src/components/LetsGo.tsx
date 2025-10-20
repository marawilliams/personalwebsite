"use client";
import { useState, useEffect } from "react";
import styles from "../styles/LetsGo.module.css";

export default function LetsGo() {
  const [variant, setVariant] = useState<"default" | "active">("default");

  useEffect(() => {
    const timer = setTimeout(() => {
      setVariant("active");
    }, 1000); // switch after 3 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);

  return (
    <div className={variant === "default" ? styles.letsGo : styles.letsGoActive}>
      Let’s Go!
    </div>
  );
}
