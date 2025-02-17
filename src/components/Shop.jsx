import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const addToBasket = (item) => {
    const indexItem = order.findIndex((orderItem) => {
      return orderItem.id === item.id;
    });

    if (indexItem === -1) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = [...order];
      newOrder[indexItem].quantity = newOrder[indexItem].quantity + 1;
      setOrder(newOrder);
    }
    setAlertName(item.name);
  };

  const removeFromBasket = (itemId) => {
    const copyOrder = order.filter((itemOrder) => {
      return itemOrder.id !== itemId;
    });
    setOrder(copyOrder);
  };

  const editCountFromBasket = (param, itemId) => {
    const copyOrder = [...order].map((orderItem) => {
      if (orderItem.id === itemId) {
        if (param === "+") {
          if (orderItem.quantity < 99) {
            orderItem.quantity = orderItem.quantity + 1;
          }
        } else if (param === "-") {
          if (orderItem.quantity > 1) {
            orderItem.quantity = orderItem.quantity - 1;
          }
        }
      }
      return orderItem;
    });
    setOrder(copyOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: { Authorization: API_KEY },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.shop) {
          setGoods(data.shop);
          setLoading(false);
        }
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow ? (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          editCountFromBasket={editCountFromBasket}
        />
      ) : (
        ""
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}

export { Shop };
