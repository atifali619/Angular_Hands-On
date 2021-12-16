import { Injectable } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor() {}

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 4),
    new Ingredient('Banana', 10),
  ];

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  addIngredientFromRecipe(ingredient:Ingredient[]){
    this.ingredients.push(...ingredient);
    
  }
}
