import React from "react";
import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

export default function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/app/cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="/app/countries">Countries</NavLink>
        </li>
        <li>
          <NavLink to="/app/forms">Forms</NavLink>
        </li>
      </ul>
    </div>
  );
}
