import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelComponent } from './model.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ButtonModule} from "../../button/button.module";



@NgModule({
  declarations: [
    ModelComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ButtonModule,
  ]
})
export class ModelModule { }
