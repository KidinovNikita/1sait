import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() control: FormControl | any = new FormControl();
  @Input() label:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}


