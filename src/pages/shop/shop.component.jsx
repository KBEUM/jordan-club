import React from "react";
import styles from "./shop.module.css";
import ShopItemList from "../../components/shop_item_list/shop_item_list.component";
import ItemDesc from "../../components/item_desc/item_desc.component";
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";

const Shop = ({ shopData }) => {
  const match = useRouteMatch();
  const title = match.params.title;

  return (
    <div className={styles.shop}>
      <ItemDesc data={shopData[title]} />
      <div className={styles.itemList}>
        <div className={styles.result}>
          RESULTS {shopData[title].items.length}
        </div>
        <ShopItemList data={shopData[title]} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ shopData: state.shopData });

export default connect(mapStateToProps)(Shop);
