import React from "react";
import Button from "src/compnents/ui/Button/Button";
import styles from "./InsightCard.module.scss";
import classNames from "classnames";

const InsightCard = ({ topText, bigText, smallText, title, background }) => {
  return (
    <div
      className={classNames([
        styles.insightCard,
        title && styles.topCard,
        styles[`insightCard--${background}`],
      ])}
    >
      <div>
        <p>{topText}</p>
        {title && <h3>{title}</h3>}
      </div>
      <div>
        <h2 className={smallText && styles.smallText}>{bigText ? bigText : smallText}</h2>
        <div className={styles.btn}>
          <Button text="Learn more" color="secondary" />
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
