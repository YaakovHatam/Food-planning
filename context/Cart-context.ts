import { createContext } from "react"
import { FastFood } from "../Interfaces/Fast.Food.Interface";
var cart: FastFood[] = [];
export const MyCart = {
    cart: cart,
    AddItem: (f: FastFood) => {
        MyCart.cart.push(f);
        console.log(MyCart.cart);
    },
    removeItem: (id: number) => {
        if (id) {
            let idArr = MyCart.cart.map(f => f.id);
            let index = idArr.indexOf(id);
            if (index !== -1) {
                MyCart.cart.splice(index, 1);
                console.log(MyCart.cart);
            }
        }
    }
}
export const MyCart1 = createContext(MyCart);







