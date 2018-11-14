import {Ingredients} from '../shared/ingredients.model';


export class ShoppingService {
  ingredients: Ingredients[] = [
    new Ingredients('apple', 5)
  ];
  constructor() {

  }
  getIngredients = () => {
    return this.ingredients;
  }
  addIngredients = (ing: Ingredients) => {
    this.ingredients.push(ing);
  }
}
