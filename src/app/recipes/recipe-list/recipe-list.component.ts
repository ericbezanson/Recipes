import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Grilled Cheese', 'bread + heat + cheese.','https://foodimentaryguy.files.wordpress.com/2014/04/479_100_andy_post_food_photography_grilled_cheese_sandwich.jpg' 
      )
    new Recipe('PB&J Sandwhich','PB on both slices, jam on one, mmmm.','http://csdecisions2.wpengine.com/wp-content/uploads/2015/10/PBJ-Sandwich.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
