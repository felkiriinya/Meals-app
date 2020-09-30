import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
    
    meals:Meal[] = [
        new Meal("Chicken","100","It's fingerlicking good"),
        new Meal("Meat","600","Aight"),
        new Meal("Jollof","800","Nasty"),
        new Meal("Samosa","250","Tasty")
    ]
    newMeal: Meal;

    //function for adding a new meal
    
    addNewMeal(meal){
        this.meals.push(meal)
    }


    //function for editing meals
    
    mealEdit(meal:Meal){
        this.newMeal = meal;
        meal.edit =false;
        
        
    }
    
    addFood(meal) {
        if(meal.edit) {
          this.meals.unshift(meal);
        }
      }

    clone = this.meals;
      constructor(private filterer:FilterService) {
    
      }
    //   filterItems() {
    //     let value = ("#filter").val();
    //     this.meals = this.filterer.filter(this.clone,value);
    //   }  
  ngOnInit(): void {
  }

}
