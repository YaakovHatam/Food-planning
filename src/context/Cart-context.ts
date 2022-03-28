import { createContext } from "react"
import {  Food } from "../Interfaces/Fast.Food.Interface";

type MyCartValueTypes = {
    cart: Food[];
    GetAllItems(): Food[];
    removeItem(id: number): void;
    AddItem(f: Food): void;
    itemsList(): string[];
    summary(): Partial<Food>;
};

export const MyCartValue: MyCartValueTypes = {
    cart: JSON.parse(localStorage.getItem("cart")!) || [],
    GetAllItems: () => MyCartValue.cart,
    AddItem: (f: Food) => {
        MyCartValue.cart.push(f);
        localStorage.setItem("cart", JSON.stringify(MyCartValue.cart));
        console.log(MyCartValue.cart);
    },
    removeItem: (id: number) => {
        if (id !== undefined) {
            let idArr = MyCartValue.cart.map((f: Food) => f.id);
            let index = idArr.indexOf(id);
            if (index !== -1) {
                MyCartValue.cart.splice(index, 1);
                console.log(MyCartValue.cart);
                localStorage.setItem("cart", JSON.stringify(MyCartValue.cart));
            }
        }
    },
    itemsList() {
        return MyCartValue.cart.map((item: Food) => item.name);
    },
    summary() {
        return MyCartValue.cart.reduce((initVal: Partial<Food>, item: Food) => {
            initVal.carbohydrates! += item.carbohydrates;
            initVal.proteins! += item.proteins;
            initVal.fats! += item.fats;
            initVal.totalCalories! += item.totalCalories;
            return initVal;
        }, {});
    },
};
export const MyCartContext = createContext(MyCartValue);
export const MyCartProvider = MyCartContext.Provider;
