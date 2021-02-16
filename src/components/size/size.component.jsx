import React from "react";
import styles from "./size.module.css";
import data from "../../redux/shop/data";

const Size = ({ title, id }) => {
  const onClick = () => {
    alert("Thank you for visiting");
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{data.jordan1.title}</h2>
      <h1 className={styles.name}>
        {data[title].items.find((item) => item.id == id).name}
      </h1>
      <div className={styles.sizeText}>SELECT US SIZE</div>
      <div className={styles.sizeBtns}>
        <button className={styles.sizeBtn}>5.5</button>
        <button className={styles.sizeBtn}>6</button>
        <button className={styles.sizeBtn}>6.5</button>
        <button className={styles.sizeBtn}>7</button>
        <button className={styles.sizeBtn}>7.5</button>
        <button className={styles.sizeBtn}>8</button>
        <button className={styles.sizeBtn}>8.5</button>
        <button className={styles.sizeBtn}>9</button>
        <button className={styles.sizeBtn}>9.5</button>
        <button className={styles.sizeBtn}>10</button>
      </div>
      <div>
        <div className={styles.buyText}>BUY NOW</div>
        <button className={styles.priceBtn} onClick={onClick}>
          ${data[title].items.find((item) => item.id == id).price}
        </button>
      </div>
    </div>
  );
};

export default Size;
