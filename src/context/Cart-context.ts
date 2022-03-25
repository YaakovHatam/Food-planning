import { createContext } from "react"

import { FastFood, Food } from "../Interfaces/Fast.Food.Interface";
var cart: Food[] = [];

export const MyCartValue = {
    GetAllItems: () => cart,
    AddItem: (f: Food) => {
        cart.push(f);
        console.log(cart);
    },
    removeItem: (id: number) => {
        if (id) {
            let idArr = cart.map(f => f.id);
            let index = idArr.indexOf(id);
            if (index !== -1) {
                cart.splice(index, 1);
                console.log(cart);
            }
        }
    },
    itemsList() {
        return cart.map((item: Food) => item.name);
    },
    summary() {
        return cart.reduce((initVal: Partial<Food>, item: Food) => {
            initVal.carbohydrates! += item.carbohydrates;
            initVal.proteins! += item.proteins;
            initVal.fats! += item.fats;
            initVal.totalCalories! += item.totalCalories;
            return initVal;
        }, {});
    }
}
export const MyCartContext = createContext(MyCartValue);
export const MyCartProvider = MyCartContext.Provider;







