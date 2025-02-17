import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
  const { goods = [], addToBasket } = props;

  if (!goods.length) {
    return <h3>Ничего нет</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.offerId} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export { GoodsList };
