import React from "react";
import { connect } from "react-redux";
import CartItem from "../../components/cartItem/cartItem.component";
import styles from "./cart.module.css";

const Cart = ({ cartItems }) => {
  return (
    <div className={styles.cart}>
      <section className={styles.text}>
        <div className={styles.title}>Air Jordan</div>
        <div className={styles.name}>Product</div>
        <div className={styles.size}>size</div>
        <div className={styles.quantity}>quantity</div>
        <div className={styles.price}>prcie</div>
        <div className={styles.btn}></div>
      </section>
      <div>
        {cartItems.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <div className={styles.total}>
        TOTAL $
        {cartItems
          .map((item) => item.price * item.quantity)
          .reduce((acc, curr) => acc + curr, 0)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ cartItems: state.cart.cartItems });

export default connect(mapStateToProps)(Cart);
