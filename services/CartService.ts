import { useState } from "react";
import { MyCart1 } from "../context/Cart-context";
import { FastFood } from "../Interfaces/Fast.Food.Interface";
import { IService } from "./IService";
import { useContext } from 'react';

const CartArr = useContext(MyCart1);
export class Cart implements IService {
    
    AddItem(food: FastFood) {
        CartArr.AddItem(food);
        console.log(1);
    }
    getAll(): FastFood[] {
        if (CartArr.cart.length!== 0) {
            return CartArr.cart;
        } else {
            throw new Error("Your Cart Is Empty");
        }
    }
    removeItem(id: number) {
        CartArr.removeItem(id);

    }
}









