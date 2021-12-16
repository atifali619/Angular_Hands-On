import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: any;
  constructor(private shoppingListService:ShoppingListService, private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  addToShopping(){
    
    this.recipeService.addIngredientsToShopping(this.recipe.ingredients);
    
  }
}
