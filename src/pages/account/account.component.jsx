import React, { useState } from "react";
import CreateAccount from "../../components/create_account/create_account.component";
import Login from "../../components/login/login.component";
import styles from "./account.module.css";

const Account = (props) => {
  const [change, setChange] = useState(true);
  const onChange = () => {
    setChange(!change);
  };

  return (
    <div className={styles.account}>
      {change ? (
        <Login onChange={onChange} />
      ) : (
        <CreateAccount onChange={onChange} />
      )}
    </div>
  );
};

export default Account;
