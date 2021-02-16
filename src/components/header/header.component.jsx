import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link className={styles.logo} to="/">
          JORDAN CLUB
        </Link>
        <div className={styles.option}>
          <Link to="/shop/jordan1">Air Jordan 1</Link>
          <Link to="/shop/jordan3">Air Jordan 3</Link>
          <Link to="/shop/jordan6">Air Jordan 6</Link>
          <Link to="/shop/jordan11">Air Jordan 11</Link>
        </div>
        <div>
          <Link className={styles.account} to="/account">
            Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
