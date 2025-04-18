import React from "react";
import { NavLink } from "react-router-dom";
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

const MobileNav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navList}>
        <ul>
          {NavLinks.map((item) => (
            <li key={item.name}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
