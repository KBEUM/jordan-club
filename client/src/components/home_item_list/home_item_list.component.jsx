import React from "react";
import styles from "./home_item_list.module.css";
import Item from "../item/item.component";

const HomeItemList = ({ data }) => {
  return (
    <div className={styles.list}>
      {data.items.slice(0, 8).map((item) => (
        <Item
          key={item.id}
          routeName={data.routeName}
          item={item}
          title={data.title}
          routeName={data.routeName}
        ></Item>
      ))}
    </div>
  );
};

export default HomeItemList;
