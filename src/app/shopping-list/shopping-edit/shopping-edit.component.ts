import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {Ingredients} from '../../shared/ingredients.model';
import { ShoppingService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInp: ElementRef;
  @ViewChild('amountInput') amountInp: ElementRef;
  // @Output() getAddedIng = new EventEmitter<Ingredients>();

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }
addItem() {
//   console.log(this.nameInp,
//     this.amountInp);

// this.getAddedIng.emit({
//   name: this.nameInp.nativeElement.value,
//   noOfItems: this.amountInp.nativeElement.value
// });

this.shoppingService.addIngredients({
  name: this.nameInp.nativeElement.value,
   noOfItems: this.amountInp.nativeElement.value
});

}
}
