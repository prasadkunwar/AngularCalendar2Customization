import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-calendar-month-meal-view',
  templateUrl: './calendar-month-meal-view.component.html'
  ,
  styleUrls: ['./calendar-month-meal-view.component.scss']
})
export class CalendarMonthMealViewComponent implements OnInit {
  recipeName: string ="Noodels";
  constructor() { }

  ngOnInit() {
  }

}
