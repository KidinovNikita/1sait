import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {ButtonModule} from "../button/button.module";
import {InputModule} from "../input/input.module";
import {MatButtonModule} from "@angular/material/button";
import {SelectModule} from "../select/select.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
        InputModule,
        MatButtonModule,
        SelectModule,
        ReactiveFormsModule
    ]
})
export class HeaderModule { }
