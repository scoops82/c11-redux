import { ShopBasket } from "./ShopBasket.jsx";
import { ShopStock } from "./ShopStock.jsx";

export function Shop() {
  return (
    <div>
      <ShopStock />
      <ShopBasket />
    </div>
  );
}
