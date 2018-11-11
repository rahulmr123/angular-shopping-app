import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe:Recipe[] = [
    
    
      new Recipe('test','test description', ' ../../../assets/hello.jpg'),
      new Recipe('chicken','chicken description', ' ../../../assets/hello.jpg')

    
  ];


  constructor() {
    console.log(this.recipe);
   }

  ngOnInit() {
  }

}
