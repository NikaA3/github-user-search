import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as Moon } from "../../img/SVG/moon-fill.svg";
import { ReactComponent as Sun } from "../../img/SVG/sun.svg";

function Header(props: {
  changeTheme: boolean;
  setChangetheme: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { changeTheme, setChangetheme } = props;
  return (
    <div className={styles.header}>
      <p className={changeTheme ? styles.dark : styles.light}>DevFinder</p>
      <div className={styles.theme}>
        {changeTheme ? (
          <div className={styles.sun}>
            <span>Light</span>
            <Sun
              className={styles.sunLogo}
              onClick={() => setChangetheme(changeTheme ? false : true)}
            />
          </div>
        ) : (
          <div className={styles.moon}>
            <span>Dark</span>
            <Moon
              className={styles.moonLogo}
              onClick={() => setChangetheme(changeTheme ? false : true)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
