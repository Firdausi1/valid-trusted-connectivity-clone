import React from "react";
import styles from "./SolutionCard.module.scss";
import Button from "src/compnents/ui/Button/Button";
import classNames from "classnames";
import { motion } from "framer-motion";

const SolutionCard = ({ color, title, text, button, image, id, style }) => {
  return (
    <motion.div className={styles.solutionCard} key={id} style={{ style }}>
      <div
        className={classNames([
          styles.cardTop,
          styles[`solutionCard--${color}`],
        ])}
      >
        <h3>{title}</h3>
        <p>{text}</p>
        <div className={styles.btnContainer}>
          {button.map((item) => (
            <Button text={item.text} icon="arrow" color="tertiary" key={item.text} />
          ))}
        </div>
      </div>
      <div className={styles.cardBottom}>
        <img src={image} alt={title} />
      </div>
    </motion.div>
  );
};

export default SolutionCard;
