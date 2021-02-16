import React from "react";
import styles from "./shop_item_list.module.css";
import Item from "../item/item.component";

const ShopItemList = ({ data }) => {
  return (
    <div className={styles.list}>
      {data.items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          item={item}
          title={data.title}
          routeName={data.routeName}
        ></Item>
      ))}
    </div>
  );
};

export default ShopItemList;
