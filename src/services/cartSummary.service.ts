import { Cart } from "./CartService";
import { FastFood } from "../Interfaces/Fast.Food.Interface";


const currentCart = new Cart();
 class Summary{
  itemsList() {
   return currentCart.getAll().map((item: FastFood) => item.name);
 }
  summary() {
    return currentCart
      .getAll()
      .reduce((initVal: Partial<FastFood>, item: FastFood) => {
        initVal.carbohydrates! += item.carbohydrates;
        initVal.proteins! += item.proteins;
        initVal.fats! += item.fats;
        initVal.totalCalories! + item.totalCalories;
        return initVal;
      }, {});
  }
}
const cartSummary:Summary = new Summary()
export default cartSummary
