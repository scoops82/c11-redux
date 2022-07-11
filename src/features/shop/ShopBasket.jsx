import { useSelector, useDispatch } from "react-redux";
import { addToBasket, removeFromBasket, shopStock } from "./shopStockSlice";

export function ShopBasket() {
  const dispatch = useDispatch();

  const shop = useSelector(shopStock);
  const basketItems = shop.itemsInBasket;
  console.log(
    "🚀 ~ file: ShopStock.jsx ~ line 8 ~ ShopStock ~ basketItems",
    basketItems
  );

  return (
    <div>
      <h2>Items in Basket</h2>
      <ul>
        {basketItems.map(
          ({ description, costInPence, numberInStock, _id }, i) => (
            <li key={i}>
              {description} {`(${numberInStock} in stock)`} £
              {(costInPence / 100).toFixed(2)}
              <button onClick={() => dispatch(removeFromBasket())}>
                Add to Basket
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
