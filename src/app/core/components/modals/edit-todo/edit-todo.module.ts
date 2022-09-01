import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTodoComponent } from './edit-todo.component';
import {MatDialogModule} from "@angular/material/dialog";
import {InputModule} from "../../input/input.module";
import {ButtonModule} from "../../button/button.module";
import {DateModule} from "../../date/date.module";




@NgModule({
  declarations: [
    EditTodoComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    InputModule,
    ButtonModule,
    MatDialogModule,
    DateModule,

  ]
})
export class EditTodoModule { }
