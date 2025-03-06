import React, { useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
  const {
    id = props.mainId,
    name = props.displayName,
    description = props.displayDescription,
    price = props.price,
    full_background = props.displayAssets?.[0]?.full_background ||
      "https://png.pngtree.com/png-clipart/20250227/original/pngtree-question-mark-sign-asking-symbol-png-image_20524362.png",
  } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => addToBasket({ id, name, price })}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price.regularPrice} Euro
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
