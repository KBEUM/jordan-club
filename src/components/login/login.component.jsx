import React from "react";
import styles from "./login.module.css";

const Login = ({ onChange }) => {
  const onClick = (event) => {
    event.preventDefault();
    onChange();
  };

  return (
    <div className={styles.account}>
      <div className={styles.login}>LOGIN</div>
      <form action="submit">
        <div className={styles.textInput}>
          <div className={styles.text}>Email Address</div>
          <input type="text" />
        </div>
        <div className={styles.textInput}>
          <div className={styles.text}>Password</div>
          <input type="password" />
        </div>
        <button className={styles.loginBtn}>LOGIN</button>
        <button className={styles.createBtn} onClick={onClick}>
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default Login;
