import React from "react";
import "./app.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Account from "./pages/account/account.component";
import Homepage from "./pages/homepage/homepage.component";
import Shop from "./pages/shop/shop.component";
import ShopItem from "./pages/shop_item/shop_item.component";
import Cart from "./pages/cart/cart.component";

function App() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/:title" component={Shop} />
        <Route exact path="/shop/:title/:shopId" component={ShopItem} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
