import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context";

const BasketItem = (props) => {
  const {
    id = props.mainId,
    name = props.displayName,
    price = props.price,
    quantity,
  } = props;

  const { removeFromBasket, editCountFromBasket } = useContext(ShopContext);

  return (
    <li className="collection-item">
      {name} X {quantity} = {price.regularPrice * quantity} Euro
      <button onClick={() => editCountFromBasket("+", id)}>+</button>
      <button onClick={() => editCountFromBasket("-", id)}>-</button>
      <span className="secondary-content">
        <i
          className="material-icons basket-delete"
          onClick={() => removeFromBasket(id)}
        >
          close
        </i>
      </span>
    </li>
  );
};

export { BasketItem };
