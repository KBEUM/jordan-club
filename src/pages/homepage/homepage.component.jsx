import React from "react";
import HomeItemList from "../../components/home_item_list/home_item_list.component";
import styles from "./homepage.module.css";
import { connect } from "react-redux";

const Homepage = ({ shopData }) => {
  return (
    <div className={styles.main}>
      <section className={styles.poster}>
        <div className={styles.name}>
          <h1 className={styles.name_text}>AIR JORDAN 1 RETRO 'BANNED'</h1>
          <a className={styles.shop_text} href="/shop/jordan1/4">
            SHOP NOW
          </a>
        </div>
      </section>
      <section className={styles.firstList}>
        <p className={styles.title}>AIR JORDAN 1</p>
        <HomeItemList data={shopData.jordan1} />
      </section>
      <section className={styles.secondList}>
        <p className={styles.title}>AIR JORDAN 3</p>
        <HomeItemList data={shopData.jordan3} />
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({ shopData: state.shopData });

export default connect(mapStateToProps)(Homepage);
