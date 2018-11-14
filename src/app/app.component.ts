import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectRecipe: boolean = true;
  selectNav(data) {
    data ? this.selectRecipe = true : this.selectRecipe = false;

  }
}
