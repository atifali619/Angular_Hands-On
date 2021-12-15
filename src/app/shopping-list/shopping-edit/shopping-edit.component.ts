import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:false}) nameInputRef : ElementRef | undefined;
  @ViewChild('amountInput', {static:false}) amountInputRef : ElementRef | undefined;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingname = this.nameInputRef?.nativeElement.value;
    const ingamount = this.amountInputRef?.nativeElement.value;
    const newIngredient = new Ingredient(ingname,ingamount);
    this.ingredientAdded.emit(newIngredient);
  }

}
