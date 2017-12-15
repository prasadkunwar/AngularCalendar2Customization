import {Component,Inject,Input} from  '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { MonthViewDay } from 'calendar-utils';

@Component({
  selector: 'add-dish-dialog',
  templateUrl: 'add-dish-dialog.html',
})
export class AddDishDialog {



  constructor(
    public dialogRef: MatDialogRef<AddDishDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
