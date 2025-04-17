import React from "react";
import styles from './AboutStats.module.scss'

const AboutStats = ({ title, text }) => {
  return (
    <div className={styles.aboutStats}>
      <h1>{title}</h1>
      <h3>{text}</h3>
    </div>
  );
};

export default AboutStats;
