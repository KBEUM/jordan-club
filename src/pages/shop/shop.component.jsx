import React from "react";
import styles from "./shop.module.css";
import data from "../../redux/shop/data";
import ShopItemList from "../../components/shop_item_list/shop_item_list.component";
import ItemDesc from "../../components/item_desc/item_desc.component";
import { useRouteMatch } from "react-router-dom";

const Shop = (props) => {
  const match = useRouteMatch();
  const title = match.params.title;

  return (
    <div className={styles.shop}>
      <ItemDesc />
      <div className={styles.itemList}>
        <div className={styles.result}>RESULTS {data[title].items.length}</div>
        <ShopItemList data={data[title]} />
      </div>
    </div>
  );
};

export default Shop;
