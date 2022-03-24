import { FastFood } from "../Interfaces/Fast.Food.Interface";

export interface IService {
    AddItem(food: FastFood): void;
    getAll(): FastFood[];
    removeItem(id: number): void;

}