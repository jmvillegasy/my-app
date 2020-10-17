export interface Dish{
    id: number;
    name: string;
    ingredient: Ingredient[];
    rating: number;
    category: string;
    price: number;
    inventoryStatus: string;
    image: string;
    stock: boolean;
}

export interface Ingredient {
    name: string;
    quantity: string;
}