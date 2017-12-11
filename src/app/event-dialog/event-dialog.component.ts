import { Component,Inject} from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA}  from '@angular/material';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.scss']
})
export class EventDialogComponent  {
  constructor(
    public dialogRef: MatDialogRef<AppComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
