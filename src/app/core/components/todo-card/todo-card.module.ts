import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from './todo-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        TodoCardComponent
    ],
    exports: [
        TodoCardComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatIconModule
  ]
})
export class TodoCardModule { }
