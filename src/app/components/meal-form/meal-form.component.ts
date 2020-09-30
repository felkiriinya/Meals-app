import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Meal } from 'src/app/models/meal';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

    newMeal = new Meal ("","","");
    // @Input() newMeal:Meal;
    @Output() addMeal = new EventEmitter <Meal>();

    //Function that creates a new meal

    submittingMeal(){
            
        this.addMeal.emit(this.newMeal);
        this.newMeal = new Meal ("","","")
    }

  constructor() { }

  ngOnInit(): void {
  }

}
