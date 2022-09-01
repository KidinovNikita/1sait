import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TodoCard} from "../../../interfaces/application.interface";

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
 @Input() cardNumber: number = 0;
 @Input() todoCard! : TodoCard ;
 @Output() changeTodoStatus: EventEmitter<void> = new EventEmitter<void>();
 @Output() deleteTodoEvent: EventEmitter<void> = new EventEmitter<void>();
 @Output() editTodoEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public ngOnChanges(): void {
  }
  public ngOnInit(): void {
  }
public editTodo(): void {
  this.editTodoEvent.emit();
}
  public deleteTodo(): void {
    console.log('Delete Card',this.todoCard);
    this.deleteTodoEvent.emit();
  }

  public todoStatus():void {
    this.changeTodoStatus.emit();
  }
}
