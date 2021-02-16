import React, { useState } from "react";
import styles from "./size.module.css";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const Size = ({ shopData, routeName, id, addItem }) => {
  const item = shopData[routeName].items.find((item) => item.id == id);
  const [cartItem, setCartItem] = useState();

  const onSize = (event) => {
    setCartItem({
      ...item,
      id: item.id * Number(event.target.innerText),
      size: Number(event.target.innerText),
    });
  };

  const onClick = () => {
    if (cartItem == null) {
      return alert("Please Select a SIZE");
    }
    addItem(cartItem);
    setCartItem();
  };

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>{shopData[routeName].title}</h2>
      <h1 className={styles.name}>{item.name}</h1>
      <div className={styles.sizeText}>SELECT US SIZE</div>
      <div className={styles.sizeBtns}>
        <button onClick={onSize} className={styles.sizeBtn}>
          5.5
        </button>
        <button onClick={onSize} className={styles.sizeBtn}>
          6
        </button>
        <button onClick={onSize} className={styles.sizeBtn}>
          6.5
        </button>
        <button onClick={onSize} className={styles.sizeBtn}>
          7
        </button>
        <button onClick={onSize} className={styles.sizeBtn}>
          7.5
        </button>
        <button onClick={onSize} className={styles.sizeBtn}>
          8
        </button>
        <button onClick={onSize} className={styles.sizeBtn}>
          8.5
        </button>
        <button onClick={onSize} className={styles.sizeBtn}>
          9
        </button>
        <button onClick={onSize} className={styles.sizeBtn}>
          9.5
        </button>
        <button onClick={onSize} className={styles.sizeBtn}>
          10
        </button>
      </div>
      <div>
        <div className={styles.price}>$ {item.price}</div>
        <button className={styles.cartBtn} onClick={onClick}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ shopData: state.shopData });

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Size);
