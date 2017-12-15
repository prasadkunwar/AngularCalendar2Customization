import { Component,Inject,Input} from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {AddDishDialog} from './add-dish-dialog';
import { MonthViewDay, MonthView } from 'calendar-utils';

@Component({
  selector: 'cv-calendar-month-meal-view',
  templateUrl: './calendar-month-meal-view.component.html'
  ,
  styleUrls: ['./calendar-month-meal-view.component.scss']
})
export class CalendarMonthMealViewComponent {

  @Input() day: MonthViewDay;

  recipeName: string ="Noodels";
  recipeTime: string= "10mins";
  currentDay: MonthViewDay = this.day;
  constructor(public dialog:MatDialog) { }

  openDialog(): void {
    console.log("My Date: " + this.day.date);
let mydateType = typeof(this.day.date);
  console.log("My Date: " + mydateType);
    let dialogRef = this.dialog.open(AddDishDialog, {
      width: '250px',
      data: { recipeName: this.recipeName, recipeTime: this.recipeTime, currentDay: this.day }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.recipeName = result;
    });
  }


}


