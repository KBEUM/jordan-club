import React from "react";
import styles from "./create_account.module.css";

const CreateAccount = ({ onChange }) => {
  const onClick = (event) => {
    event.preventDefault();
    onChange();
  };

  return (
    <div className={styles.account}>
      <div className={styles.login}>CREATE AN ACCOUNT</div>
      <form action="submit">
        <div className={styles.textInput}>
          <div className={styles.text}>Full Name</div>
          <input type="text" />
        </div>
        <div className={styles.textInput}>
          <div className={styles.text}>Email Address</div>
          <input type="text" />
        </div>
        <div className={styles.textInput}>
          <div className={styles.text}>Password</div>
          <input type="password" />
        </div>
        <div className={styles.textInput}>
          <div className={styles.text}>Confirm Password</div>
          <input type="password" />
        </div>
        <button className={styles.createBtn}>CREATE ACCOUNT</button>
        <button className={styles.loginBtn} onClick={onClick}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
