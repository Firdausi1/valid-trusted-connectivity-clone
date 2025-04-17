import React from "react";
import styles from "./SectionHeader.module.scss";
import Button from "src/compnents/ui/Button/Button";

const SectionHeader = ({ buttonText, title, text }) => {
  return (
    <div className={styles.sectionHeaderContainer}>
      <div className={styles.sectionHeader}>
        <p>{title}</p>
        <h2>{text}</h2>
        <div className={styles.btn}>
          <Button color="gradient" text={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
