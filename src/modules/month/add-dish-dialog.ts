import {Component,Inject,Input} from  '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { MonthViewDay } from 'calendar-utils';
import { FormControl } from '@angular/forms';
import  'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

export interface Recipe {
  name: string;
  time: number;
}


@Component({
  selector: 'add-dish-dialog',
  templateUrl: 'add-dish-dialog.html',
})
export class AddDishDialog {

  recipeCtrl: FormControl;
  recipes:Recipe[] =[
    {name: "Matar Paneer", time: 30},
    {name: "Sambhar", time: 40},
    {name: "Asperagus-Spaghetti", time: 60},
    {name: "Noodles", time: 30},
    {name: "MixDal", time: 30},
    {name: "Alloo-Eggplant", time: 30},
    {name: "Boda", time: 30},
    {name: "Bread-Omelette", time: 30},
    {name: "Sabu-Vada", time: 30}
 ]

 reactiveRecipes: any;


  constructor(
    public dialogRef: MatDialogRef<AddDishDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      this.recipeCtrl = new FormControl({name: 'Sambhar', time: 60});
        this.reactiveRecipes = this.recipeCtrl.valueChanges
        .startWith(this.recipeCtrl.value)
        .map(val => this.displayFn(val))
        .map(name => this.filterRecipes(name));
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }
  filterRecipes(val: string) {
    return val ? this._filter(this.recipes, val) : this.recipes;
  }

  private _filter(recipes: Recipe[], val: string) {
    const filterValue = val.toLowerCase();
    return recipes.filter(recipe => recipe.name.toLowerCase().startsWith(filterValue));
  }

}
