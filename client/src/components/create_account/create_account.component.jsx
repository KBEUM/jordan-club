import React, { useState } from "react";
import styles from "./create_account.module.css";
import axios from "axios";

const CreateAccount = ({ onChange }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const nameChange = (event) => {
    setName(event.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const confirmChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onCreate = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Confirm password does not match");
    }
    const body = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("https://jordan-club-server.herokuapp.com/account/create", body)
      .then(onChange());
  };

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
          <input type="text" value={name} onChange={nameChange} />
        </div>
        <div className={styles.textInput}>
          <div className={styles.text}>Email Address</div>
          <input type="text" value={email} onChange={emailChange} />
        </div>
        <div className={styles.textInput}>
          <div className={styles.text}>Password</div>
          <input type="password" value={password} onChange={passwordChange} />
        </div>
        <div className={styles.textInput}>
          <div className={styles.text}>Confirm Password</div>
          <input
            type="password"
            value={confirmPassword}
            onChange={confirmChange}
          />
        </div>
        <button className={styles.createBtn} onClick={onCreate}>
          CREATE ACCOUNT
        </button>
        <button className={styles.loginBtn} onClick={onClick}>
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
