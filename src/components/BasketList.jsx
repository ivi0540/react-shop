import { BasketItem } from "./BasketItem";

const BasketList = (props) => {
  const {
    order = [],
    handleBasketShow,
    removeFromBasket,
    editCountFromBasket,
  } = props;
  const totalPrice = order.reduce((sum, elem) => {
    return sum + elem.price.regularPrice * elem.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((orderItem) => {
          return (
            <BasketItem
              key={orderItem.id}
              {...orderItem}
              removeFromBasket={removeFromBasket}
              editCountFromBasket={editCountFromBasket}
            />
          );
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice} Euro
      </li>
      <li className="collection-item">
        <button className="btn btn-small">Оформить</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
};

export { BasketList };
