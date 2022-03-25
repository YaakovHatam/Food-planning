import { Food } from "../Interfaces/Fast.Food.Interface";

export interface IService {
    AddItem(food: Food): void;
    getAll(): Food[];
    removeItem(id: number): void;

}