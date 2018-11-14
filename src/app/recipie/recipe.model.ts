import { Ingredients } from '../shared/ingredients.model';

export class Recipe {
    name: string;
    description: string;
    imagePath: string;
    ingredients: Ingredients;
    constructor(name, desc, imagePath, ingredients) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
