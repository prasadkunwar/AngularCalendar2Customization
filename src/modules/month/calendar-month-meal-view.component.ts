import { Component, Inject, Input, ChangeDetectorRef} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddDishDialog } from './add-dish-dialog';
import { MonthViewDay, MonthView } from 'calendar-utils';
import { Recipe } from './Recipe';

@Component({
  selector: 'cv-calendar-month-meal-view',
  templateUrl: './calendar-month-meal-view.component.html'
  ,
  styleUrls: ['./calendar-month-meal-view.component.scss']
})
export class CalendarMonthMealViewComponent {

  @Input() day: MonthViewDay;
  currentDay: MonthViewDay = this.day;
  recipe: Recipe = new Recipe("Noodles", 30);
  recipeB: Recipe = new Recipe("Cereal", 5);
  recipeL: Recipe = new Recipe("Boda", 30);
  recipeS: Recipe = new Recipe("Banana", 1);
  recipeD: Recipe = new Recipe("Alloo-Eggplant", 30);
   recipeObj : any;
  constructor(public dialog: MatDialog, private cdRef: ChangeDetectorRef) { }

  
  openDialog(MealType: string): void {
    console.log("My Date: " + this.day.date);
    let mydateType = typeof (this.day.date);
    console.log(MealType);
    switch (MealType) {
      case "B":
       this.recipeObj =  { recipeName: this.recipeB.recipeName, recipeTime: this.recipeB.time, currentDay: this.day, recipeType: "B" };
       break;
      case "L":
      this.recipeObj =  { recipeName: this.recipeL.recipeName, recipeTime: this.recipeL.time, currentDay: this.day, recipeType: "L"  };
      break;
      case "S":
      this.recipeObj =  { recipeName: this.recipeS.recipeName, recipeTime: this.recipeS.time, currentDay: this.day, recipeType: "S"  };
      break;
      case "D":
      this.recipeObj =  { recipeName: this.recipeD.recipeName, recipeTime: this.recipeD.time, currentDay: this.day,recipeType: "D"  };
       break;
    }
    console.log(this.recipeObj);
    let dialogRef = this.dialog.open(AddDishDialog, {
      width: '250px',
      data: this.recipeObj
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if(result != undefined){
      //console.log(this.recipeObj);
        switch (result.mealType) {
        case "B":
         this.recipeB =  { recipeName: result.recipeName, time: result.time};
         break;
        case "L":
        this.recipeL =  { recipeName: result.recipeName, time: result.time};
        break;
        case "S":
        this.recipeS =  { recipeName: result.recipeName, time: result.time};
        break;
        case "D":
        this.recipeD =  { recipeName: result.recipeName, time: result.time};
         break;
      }
    }
      //this.recipeObj.recipeName = result.recipeName;
      this.cdRef.markForCheck();
      //console.log(this.recipeObj);
      //console.log("This recipe name is " + this.recipe.recipeName);
    });
  }


}


