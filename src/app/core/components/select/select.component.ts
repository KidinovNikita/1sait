import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {FormControl} from "@angular/forms";



@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Output() textSelect : EventEmitter<void> = new EventEmitter<void>();
  @Input() public textSelector:FormControl | any = new FormControl('');


  constructor() {
  }

  ngOnInit(): void {
  }

  public textSelectorOption():void{
    this.textSelect.emit(this.textSelector.value)
  }

}

