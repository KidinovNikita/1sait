import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {InputModule} from "./core/components/input/input.module";
import {HeaderModule} from "./core/components/header/header.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonComponent} from "./core/components/button/button.component";
import {TodoCardModule} from "./core/components/todo-card/todo-card.module";
import {ModelModule} from "./core/components/modals/model/model.module";
import {EditTodoComponent} from "./core/components/modals/edit-todo/edit-todo.component";
import {EditTodoModule} from "./core/components/modals/edit-todo/edit-todo.module";
import {SelectModule} from "./core/components/select/select.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        InputModule,
        HeaderModule,
        BrowserAnimationsModule,
        TodoCardModule,
        ModelModule,
        EditTodoModule,
        SelectModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
