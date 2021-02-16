import React from "react";
import styles from "./item_desc.module.css";
import data from "../../redux/shop/data";

const ItemDesc = (props) => {
  return (
    <div className={styles.info}>
      <h1 className={styles.title}>{data.jordan1.title.toUpperCase()}</h1>
      <div className={styles.desc}>
        When the Air Jordan 1 arrived in '85, it was with rule-breaking bravado.
        The banned black-red colorway violated the league's uniform policy and
        resulted in a $5,000 fine from the NBA each time Michael Jordan wore
        sneakers. Thus the legacy began. Jordan's rookie campaign in 1984-85
        finished with His Airness averaging 28.2 points per game to earn
        All-Star and Rookie of the Year honors.
      </div>
    </div>
  );
};

export default ItemDesc;
