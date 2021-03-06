import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipeItem: Recipe ;
// @Output() itemClicked = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  ngOnchanges() {
    console.log(this.recipeItem);
  }
  onSelectItem() {
    // console.log('hiiii')
    // this.itemClicked.emit(this.recipeItem);
this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
