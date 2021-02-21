import React, { useState } from "react";
import { connect } from "react-redux";
import styles from "./login.module.css";
import { loginUser } from "../../redux/user/user.action";
import { useHistory } from "react-router-dom";

const Login = ({ onChange, loginUser }) => {
  const histroy = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (event) => {
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const onLogin = (event) => {
    event.preventDefault();
    const body = {
      email: email,
      password: password,
    };
    loginUser(body).then((res) => {
      if (res.payload.loginSucess) {
        histroy.push("/");
      }
      alert("Email or password not correct.");
    });
  };

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
          <input type="text" value={email} onChange={emailChange} />
        </div>
        <div className={styles.textInput}>
          <div className={styles.text}>Password</div>
          <input type="password" value={password} onChange={passwordChange} />
        </div>
        <button className={styles.loginBtn} onClick={onLogin}>
          LOGIN
        </button>
        <button className={styles.createBtn} onClick={onClick}>
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (body) => dispatch(loginUser(body)),
});

export default connect(null, mapDispatchToProps)(Login);
