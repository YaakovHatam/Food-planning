
export interface Food {
    id: number;
    kashrut: Kashrut;
    name: string;
    carbohydrates: number;
    proteins: number;
    fats: number;
    totalCalories: number;
}

export interface FastFood extends Food {
    barcode?: string;
    company?: string;
    foodGroup: FoodGroupEnum;
}

export enum FoodGroupEnum {
    dairy,
    meaty,
    parve
}

export enum Kashrut {
    unknown,
    Badatz,
    Rabanut,
    HatamSofer,
    Yitshar
}