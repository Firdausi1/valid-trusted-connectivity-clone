import React from "react";
import styles from "./SolutionCard.module.scss";
import Button from "src/compnents/ui/Button/Button";
import classNames from "classnames";

const SolutionCard = ({ color, title, text, button, image }) => {
  return (
    <div classNames={styles.solutionCard}>
      <div
        className={classNames([styles.cardTop, styles[`solutionCard--${color}`]])}
      >
        <h3>{title}</h3>
        <p>{text}</p>
        <div className={styles.btnContainer}>
          {button.map((item) => (
            <Button text={item.text} icon="arrow" color="tertiary" />
          ))}
        </div>
      </div>
      <div className={styles.cardBottom}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default SolutionCard;
