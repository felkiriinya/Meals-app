import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meal } from 'src/app/models/meal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    @Input() meals:Meal;
  @Output() editMeal = new EventEmitter<Meal>();
  constructor() { }

  ngOnInit(): void {
  }

}
