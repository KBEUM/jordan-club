import React from "react";
import { connect } from "react-redux";
import styles from "./item_image.module.css";

const ItemImage = ({ shopData, routeName, id }) => {
  const item = shopData[routeName].items.find((item) => item.id == id);

  return (
    <div className={styles.itemImage}>
      <h2 className={styles.name}>{item.name}</h2>
      <img src={item.imageUrl} alt="jordan1" className={styles.img} />
    </div>
  );
};

const mapStateToProps = (state) => ({ shopData: state.shopData });

export default connect(mapStateToProps)(ItemImage);
