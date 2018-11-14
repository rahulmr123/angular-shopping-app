import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
 @Output() navigationRecShop = new EventEmitter<boolean>();

 onSelectRecipe() {
   this.navigationRecShop.emit(true);
 }
 onSelectShop () {
  this.navigationRecShop.emit(false);
}
}

