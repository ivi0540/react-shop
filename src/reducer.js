export function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        order: state.order.filter((itemOrder) => {
          return itemOrder.id !== payload.id;
        }),
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "HANDLE_BASKET_SHOW":
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };

    case "ADD_TO_BASKET": {
      const indexItem = state.order.findIndex((orderItem) => {
        return orderItem.id === payload.id;
      });

      let newOrderRETURN = null;
      if (indexItem === -1) {
        const newItem = { ...payload, quantity: 1 };
        newOrderRETURN = [...state.order, newItem];
      } else {
        const newOrder = [...state.order];
        newOrder[indexItem].quantity = newOrder[indexItem].quantity + 1;
        newOrderRETURN = newOrder;
      }

      return {
        ...state,
        order: newOrderRETURN,
        alertName: payload.name,
      };
    }

    case "EDIT_COUNT_FROM_BASKET": {
      return {
        ...state,
        order: [...state.order].map((orderItem) => {
          if (orderItem.id === payload.itemId) {
            if (payload.param === "+") {
              if (orderItem.quantity < 99) {
                orderItem.quantity = orderItem.quantity + 1;
              }
            } else if (payload.param === "-") {
              if (orderItem.quantity > 1) {
                orderItem.quantity = orderItem.quantity - 1;
              }
            }
          }
          return orderItem;
        }),
      };
    }

    default:
      return state;
  }
}
