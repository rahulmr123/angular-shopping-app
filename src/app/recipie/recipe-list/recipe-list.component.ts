import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Recipe} from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeListComponent implements OnInit {
 recipe: Recipe[];
recipeItem: Recipe;

  constructor(private recipeDataService: RecipeService) {
    this.recipe = recipeDataService.getRecipeList();
    console.log(this.recipe);
   }

  ngOnInit() {
  }
  // itemClick(data) {
  //  this.recipeItem =  data;
  // }

}
