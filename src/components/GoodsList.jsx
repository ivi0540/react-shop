import React, { useContext } from "react";
import { ShopContext } from "../context";
import { GoodsItem } from "./GoodsItem";

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Ничего нет</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.offerId} {...item} />
      ))}
    </div>
  );
}

export { GoodsList };
