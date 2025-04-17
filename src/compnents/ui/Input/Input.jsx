import React from "react";
import styles from "./Input.module.scss";
import Button from "../Button/Button";

const Input = ({ placeholder }) => {
  return (
    <div className={styles.input}>
      <input type="text" placeholder={placeholder} />
      <div className={styles.btn}>
        <Button text="Register" color="dark" />
      </div>
    </div>
  );
};

export default Input;
