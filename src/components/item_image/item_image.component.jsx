import React from "react";
import styles from "./item_image.module.css";
import data from "../../redux/shop/data";

const ItemImage = ({ title, id }) => {
  return (
    <div className={styles.itemImage}>
      <h2 className={styles.name}>
        {data[title].items.find((item) => item.id == id).name}
      </h2>
      <img
        src={data[title].items.find((item) => item.id == id).imageUrl}
        alt="jordan1"
        className={styles.img}
      />
    </div>
  );
};

export default ItemImage;
