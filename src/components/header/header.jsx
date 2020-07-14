import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>COVID-19 Tracker</div>
      <div className={styles.socials}>
        <a href="https://github.com/GardLundh" className="github social">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} size="4x" />
        </a>
      </div>
      <p className={styles.about}>
        Daily data on COVID-19 using
        <a
          className={styles.link}
          href="https://github.com/mathdroid/covid-19-api"
        >
          {" "}
          Mathdroid api.
        </a>
      </p>
    </header>
  );
};
export default Header;
