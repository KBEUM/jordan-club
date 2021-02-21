import React from "react";
import styles from "./item_desc.module.css";

const ItemDesc = ({ data }) => {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{data.title.toUpperCase()}</h1>
      <div className={styles.desc}>{data.desc}</div>
    </div>
  );
};

export default ItemDesc;
