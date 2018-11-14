import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipe: Recipe[] = [
    new Recipe('test', 'test description', ' ../../../../assets/hello.jpg', {name: 'sambar', noOfItems: 10}),
    new Recipe('chicken', 'chicken description', '../../../../assets/hello.jpg', {name: 'sambarAviyal', noOfItems: 13})
];
  constructor() { }
  getRecipeList() {
    return this.recipe.slice();
  }
}
