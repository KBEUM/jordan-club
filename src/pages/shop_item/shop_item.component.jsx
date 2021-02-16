import React from "react";
import { useRouteMatch } from "react-router-dom";
import ItemImage from "../../components/item_image/item_image.component";
import Size from "../../components/size/size.component";
import styles from "./shop_item.module.css";

const ShopItem = (props) => {
  const match = useRouteMatch();
  const routeName = match.params.title;
  const id = match.params.shopId;

  return (
    <div className={styles.main}>
      <div className={styles.shopItem}>
        <ItemImage routeName={routeName} id={id} />
        <Size routeName={routeName} id={id} />
      </div>
    </div>
  );
};

export default ShopItem;
