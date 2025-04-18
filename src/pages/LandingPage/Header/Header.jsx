import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Button from "src/compnents/ui/Button/Button";
import Lenis from "@studio-freight/lenis";
import classNames from "classnames";

const Header = () => {
  const [transitionColor, setTransitionColor] = useState("20.1711%");
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setTransitionColor(window.scrollY / 10 + "%");
      } else {
        setTransitionColor("20.1711%");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [transitionColor]);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <video autoPlay muted loop>
          <source
            src="https://trustedconnectivity.valid.com/wp-content/uploads/2024/11/Hero-valid.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className={styles.heading}>
          <h1
            className={classNames([styles.gradientText])}
            style={{ "backgroundPositionX": transitionColor }}
          >
            Empowering
          </h1>
          <div className={styles.headerText}>
            <div className={styles.btn}>
              <Button text="Talk to our experts" color="secondary" />
            </div>
            <h1 className={styles.text2}>seamless</h1>
          </div>
          <h1 className={styles.text3}>connectivity</h1>
        </div>
      </div>
      <div className={styles.gradientBackground}></div>
    </div>
  );
};

export default Header;
