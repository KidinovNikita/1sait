import { Component, OnInit,Input } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input () textControl:FormControl | any = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  public resetControl():void{
   this.textControl.reset('');
  }
}
