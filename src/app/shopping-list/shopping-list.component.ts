import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 4),
    new Ingredient("Banana", 10),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
