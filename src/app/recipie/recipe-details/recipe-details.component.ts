import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from '../../shopping-list/shopping-list.service';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit , AfterViewInit {
  // tslint:disable-next-line:no-input-rename
  @Input('recipeData') data;
  // dataRec: Recipe;
  color: string = 'yellow';

  constructor(private recipeService: RecipeService, private shoppingService: ShoppingService) { }

  ngOnInit() {
    console.log(this.data);
//     this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
//       console.log('====>details', recipe);
// this.data = recipe;
//     });
  }
ngAfterViewInit() {

}
toIngredientsList() {
  console.log('this', this.data.ingredients);
this.shoppingService.addIngredients(this.data.ingredients);
}
}
