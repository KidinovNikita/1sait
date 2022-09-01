import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent  {

  constructor(
    private dialogRef:MatDialogRef<ModelComponent>
  ) { }

  public confirm():void {
    this.dialogRef.close(true);
  }

  public close():void {
    this.dialogRef.close();
  }
}
