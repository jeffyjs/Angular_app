import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
    
  private  recipes: Recipe [] = [
        new Recipe(
            'Res Food', 
            'This is a test recipe in menu',
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387918756116.jpeg', 
            [
                new Ingredient('Meat',1),
                new Ingredient ('Fries',5),
            ] ),
        new Recipe(
            'Sub', 
            'This is a test recipe in menu',
            'https://mrsub.ca/wp-content/uploads/2019/02/2ChipotleTurkeyBaconWrap-300x200-1.jpg',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',2)
            ]),
        new Recipe('No3 Test Recipe', 'This is a test recipe in menu','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387918756116.jpeg',[]),
        new Recipe('No4 Test Recipe', 'This is a test recipe in menu','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387918756116.jpeg',[]),
        new Recipe('No5 Test Recipe', 'This is a test recipe in menu','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/25/0/FNK_pan-seared-salmon-with-kale-apple-salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1387918756116.jpeg',[]),
      
      ];

    constructor(private SLService : ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }
    
    addIngtoShopList(ingredients:Ingredient []){
        this.SLService.addIngredients(ingredients);
    }
}