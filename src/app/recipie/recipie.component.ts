import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css'],
  providers: [RecipeService]
})
export class RecipieComponent implements OnInit {
  recipeData: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe ) => {
    console.log("subscribe", recipe);
    this.recipeData = recipe;
    });
  }
//   recipeItemClicked(data){
//     console.log("=====", data);
// this.recipeData = data;
//   }

}
