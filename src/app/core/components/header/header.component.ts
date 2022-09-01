import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() updateEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() cardAll: EventEmitter<void> = new EventEmitter<void>();
  @Output() cardActive: EventEmitter<void> = new EventEmitter<void>();
  @Output() cardFinish: EventEmitter<void> = new EventEmitter<void>();
  @Output() textSelect: EventEmitter<string> = new EventEmitter<string>();


  public todoControl: FormControl = new FormControl('', [Validators.required]);
  public sortSelect: FormControl | any = new FormControl('');



  public createTodo(): void {
    console.log(this.todoControl.value, 'this.todoControl.value');
    this.updateEvent.emit(this.todoControl.value);
    this.todoControl.reset('');
  }


  public showAll():void {
    this.cardAll.emit();
  }
  public showActive():void {
    this.cardActive.emit();
  }
  public showFinish():void {
    this.cardFinish.emit();
  }

  public sortSelectorUpdate():void {
    this.textSelect.emit(this.sortSelect.value)
  }
}


