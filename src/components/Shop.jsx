import { useState, useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";
import { ShopContext } from "../context";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";
import React from "react";

function Shop() {
  const { loading, order, isBasketShow, setGoods, alertName } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.shop) {
          setGoods(data.shop);
        }
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow ? <BasketList /> : ""}
      {alertName && <Alert />}
    </main>
  );
}

export { Shop };
