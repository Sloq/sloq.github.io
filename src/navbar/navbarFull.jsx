import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styles from './navbar.module.css';
import linkedIn from '../linkedIn.png'
import gitHub from '../gitHub.png'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navbar}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/altpage">Altpage</Link>
        </li>
        <li>
          <img src={linkedIn} className={styles.linkedIn} alt="linkedIn" />
        </li>
        <li>
          <img src={gitHub} className={styles.gitHub} alt="gitHub" />
        </li>
        {/* left and width change */}
        <li className={styles.menuLine}></li>
      </ul>
    </nav>
  );
}

export default Navbar;