import { useSelector, useDispatch } from "react-redux";
import { addToBasket, returnItemStock, shopStock } from "./shopStockSlice";

export function ShopStock() {
  const dispatch = useDispatch();

  const shop = useSelector(shopStock);
  const stockItems = shop.itemsInStock;
  console.log(
    "🚀 ~ file: ShopStock.jsx ~ line 8 ~ ShopStock ~ stockItems",
    stockItems
  );

  return (
    <div>
      <h2>Items in Stock</h2>
      <ul>
        {stockItems.map(
          ({ description, costInPence, numberInStock, _id }, i) => (
            <li key={i}>
              {description} {`(${numberInStock} in stock)`} £
              {(costInPence / 100).toFixed(2)} {i}
              <button onClick={() => dispatch(addToBasket())}>
                Add to Basket
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
