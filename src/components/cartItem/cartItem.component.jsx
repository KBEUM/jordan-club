import React from "react";
import { connect } from "react-redux";
import styles from "./cartItem.module.css";
import { addItem, deleteItem } from "../../redux/cart/cart.action";

const CartItem = ({ item, addItem, deleteItem }) => {
  const onAdd = () => {
    addItem(item);
  };

  const onDelete = () => {
    deleteItem(item);
  };

  return (
    <div className={styles.cartItem}>
      <img className={styles.image} src={item.imageUrl} alt="" />
      <div className={styles.name}>{item.name}</div>
      <div className={styles.size}>US {item.size}</div>
      <div className={styles.quantity}>
        <button className={styles.quantityBtn} onClick={onDelete}>
          -
        </button>
        <div>{item.quantity}</div>
        <button className={styles.quantityBtn} onClick={onAdd}>
          +
        </button>
      </div>
      <div className={styles.price}>${item.price * item.quantity}</div>
      <button className={styles.deleteBtn} onClick={onDelete}>
        DELETE
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  deleteItem: (item) => dispatch(deleteItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);
