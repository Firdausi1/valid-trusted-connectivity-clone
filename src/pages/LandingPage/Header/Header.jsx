import React, { useEffect } from "react";
import styles from "./Header.module.scss";
import Button from "src/compnents/ui/Button/Button";
import Lenis from "@studio-freight/lenis";

const Header = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <h1 className={styles.gradientText}>Empowering</h1>
        <div className={styles.headerText}>
          <div className={styles.btn}>
            <Button text="Talk to our experts" color="secondary" />
          </div>
          <h1>
            seamless
          </h1>
        </div>
        <h1>connectivity</h1>
      </div>
    </div>
  );
};

export default Header;
