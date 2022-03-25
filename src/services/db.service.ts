import {
  FastFood,
  FoodGroupEnum,
  Kashrut,
} from "../Interfaces/Fast.Food.Interface";
import { SearchValuesModel } from "../Interfaces/search.value.model";
import levenshteinDistance from "./search.service";

const items: FastFood[] = [
  {
    company: "השף המתוק",
    name: "קורנפלור",
    totalCalories: 724,
    proteins: 0.5,
    carbohydrates: 1.5,
    fats: 0.5,
    foodGroup: FoodGroupEnum.parve,
    kashrut: Kashrut.unknown,
  },
  {
    company: "נסטלה",
    name: "CRUNCH",
    totalCalories: 344,
    proteins: 0,
    carbohydrates: 86,
    fats: 0,
    foodGroup: FoodGroupEnum.parve,
    kashrut: Kashrut.unknown,
  },
  {
    company: "תלמה",
    name: "קוקומן",
    totalCalories: 389,
    proteins: 7.4,
    carbohydrates: 0.7,
    fats: 7.6,
    foodGroup: FoodGroupEnum.parve,
    kashrut: Kashrut.unknown,
  },
  {
    name: "קרוטונים",
    company: "אסם",
    totalCalories: 376,
    proteins: 8.3,
    carbohydrates: 84,
    fats: 4,
    foodGroup: FoodGroupEnum.parve,
    kashrut: Kashrut.unknown,
  },
  {
    name: "קישקע קפוא",
    company: "טיבון ויל",
    totalCalories: 533,
    proteins: 8.5,
    carbohydrates: 56,
    fats: 0.5,
    foodGroup: FoodGroupEnum.meaty,
    kashrut: Kashrut.unknown,
  },
  {
    name: "פתיבר קלאסי",
    company: "אסם",
    totalCalories: 266,
    proteins: 11,
    carbohydrates: 15,
    fats: 18,
    foodGroup: FoodGroupEnum.parve,
    kashrut: Kashrut.unknown,
  },
  {
    name: "לא ידוע",
    company: undefined,
    totalCalories: 462,
    proteins: 8,
    carbohydrates: 76,
    fats: 14,
    foodGroup: FoodGroupEnum.parve,
    kashrut: Kashrut.unknown,
  },
].map((foodItem, i) => ({ id: i, ...foodItem }));

export const api = {
  getAllFoods: async (endpoint: string) => items,
  searchFoodTextual: async (query: string) => items,
  searchFoodByValues: async (values: SearchValuesModel) =>
    items.filter(
      (m) =>
        m.fats < values.fatMax &&
        m.fats > values.fatMin &&
        m.carbohydrates < values.carboMax &&
        m.carbohydrates > values.carboMin &&
        m.proteins < values.protMax &&
        m.proteins > values.protMin
    ),
  getLevenshteinDistance: async (search: string) => {
    const closest = items
      .map((b) => {
        return { name: b.name, steps: levenshteinDistance(search, b.name) };
      })
      .reduce(function (prev, curr) {
        return prev.steps < curr.steps ? prev : curr;
      });
    return items.find((i) => closest.name);
  },
};
