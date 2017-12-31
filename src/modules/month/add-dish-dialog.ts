import {Component,Inject,Input} from  '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { MonthViewDay } from 'calendar-utils';
import { FormControl } from '@angular/forms';
import  'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {Recipe} from  './Recipe';

@Component({
  selector: 'add-dish-dialog',
  templateUrl: 'add-dish-dialog.html',
})
export class AddDishDialog {
  recipeCtrl: FormControl;
  recipes:Recipe[] =[
    {recipeName: "Matar Paneer", time: 30},
    {recipeName: "Sambhar", time: 40},
    {recipeName: "Asperagus-Spaghetti", time: 60},
    {recipeName: "Noodles", time: 30},
    {recipeName: "MixDal", time: 30},
    {recipeName: "Alloo-Eggplant", time: 30},
    {recipeName: "Boda", time: 30},
    {recipeName: "Bread-Omelette", time: 30},
    {recipeName: "Cereal", time: 5},
    {recipeName: "Sabu-Vada", time: 30},
    {recipeName: "Banana", time: 1}
 ]

 reactiveRecipes: any;
 dialogResult : any;

  constructor(
    public dialogRef: MatDialogRef<AddDishDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.recipeCtrl = new FormControl({recipeName: data.recipeName, time: data.time});
        this.reactiveRecipes = this.recipeCtrl.valueChanges
        .startWith(this.recipeCtrl.value)
        .map(val => this.displayFn(val))
        .map(recipeName => this.filterRecipes(recipeName));
     }
  
     onClick(mealType: string ): void {
       this.dialogResult = {recipeName: this.recipeCtrl.value.recipeName, mealType: mealType }
      this.dialogRef.close(this.dialogResult);
    }
  
  onNoClick(): void {
    this.dialogRef.close();
  }


  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.recipeName : value;
  }
  filterRecipes(val: string) {
    return val ? this._filter(this.recipes, val) : this.recipes;
  }

  private _filter(recipes: Recipe[], val: string) {
    const filterValue = val.toLowerCase();
    return recipes.filter(recipe => recipe.recipeName.toLowerCase().startsWith(filterValue));
  }
}
