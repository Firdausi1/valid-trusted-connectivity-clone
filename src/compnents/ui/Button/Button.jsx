import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
import { FaArrowRight } from "react-icons/fa";

const Button = ({
  text,
  onClick,
  type,
  color = "default",
  size = "medium",
  disabled,
  icon,
}) => {
  let disabledClass = "";
  let typeClass = "";
  let sizeClass = "";

  if (disabled) {
    disabledClass = styles["button--disabled"];
  }

  if (color !== "default") {
    typeClass = styles[`button--${color}`];
  }

  if (size !== "medium") {
    sizeClass = styles[`button--${size}`];
  }

  const computeIcon = () => {
    if (icon === "arrow") {
      return <FaArrowRight />;
    }
  };

  if (color === "gradient") {
    return (
      <div className={styles.btnGradient}>
        <div className={styles.btn}>{text}</div>
      </div>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      size={size}
      color={color}
      className={classNames([
        styles.button,
        typeClass,
        disabledClass,
        sizeClass,
      ])}
    >
      {text}
      {icon && computeIcon()}
    </button>
  );
};

export default Button;
