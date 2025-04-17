import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "src/compnents/ui/Button/Button";
import styles from "./Nav.module.scss";

const NavLinks = [
  {
    name: "Solutions",
    to: "/",
  },
  {
    name: "Insights",
    to: "/",
  },
  {
    name: "About",
    to: "/",
  },
  {
    name: "Careers",
    to: "/",
  },
];

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.logo}>
        Logo
      </Link>
      <div className={styles.navList}>
        <ul>
          {NavLinks.map((item) => (
            <li key={item.name}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.btn}>
          <Button text="Talk to our experts" color="primary" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
