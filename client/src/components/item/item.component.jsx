import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./item.module.css";

const Item = ({ item, title, routeName }) => {
  const history = useHistory();

  const onClick = (event) => {
    history.push(`/shop/${routeName}/${item.id}`);
  };

  return (
    <div className={styles.item} onClick={onClick}>
      <img className={styles.image} src={item.imageUrl} alt="1"></img>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <h2 className={styles.name}>{item.name}</h2>
        <div className={styles.price}>${item.price}</div>
      </div>
    </div>
  );
};

export default Item;
