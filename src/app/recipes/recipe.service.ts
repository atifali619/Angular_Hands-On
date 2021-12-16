import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private slService: ShoppingListService) {}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'First Recipe',
      'First Recipe Discription',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      [new Ingredient('Rice', 1), new Ingredient('Water', 500)]
    ),
    new Recipe(
      'Second Recipe',
      'Second Recipe Discription',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80',
      [new Ingredient('Bread', 1), new Ingredient('Cheese', 250)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShopping(ingredient: Ingredient[]) {
    this.slService.addIngredientFromRecipe(ingredient);
  }
}
