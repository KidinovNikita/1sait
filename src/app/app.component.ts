import {Component, OnInit} from '@angular/core';
import {TodoListService} from "./services/todo-list.service";
import {TodoCard} from "./interfaces/application.interface";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModelComponent} from "./core/components/modals/model/model.component";
import {EditTodoComponent} from "./core/components/modals/edit-todo/edit-todo.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first_project';
  public todoList: TodoCard[] = [];


  constructor(
    private todoListService: TodoListService,
    private dialog: MatDialog,
  ) {
  }

  public ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList;
  }

  public handleUpdate(name: string): void {
    console.log(name, 'name')
    this.todoListService.setNewTodo = name;
    this.todoList = this.todoListService.getTodoList;
    console.log(this.todoList, 'this.todoList');
  }

  public changeTodoStatus(todo: TodoCard): void {
    console.log(todo, 'todo');
    this.todoListService.setNewTodoStatusId = todo.id;
    this.todoList = this.todoListService.getTodoList;
  }

  public deleteTodo(todo: TodoCard): void {
    console.log(todo, 'todo');
    const dialogConfig = new MatDialogConfig();

    const dialogRef = this.dialog.open(ModelComponent, dialogConfig)
    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log(result, 'result');
      if (result) {
        this.todoListService.deleteTodoId(todo.id);
        this.todoList = this.todoListService.getTodoList;
      }
    });
  }

  public editTodo(todo: TodoCard): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '360px';
    dialogConfig.height = '290px';
    dialogConfig.data = todo;


    const dialogRef = this.dialog.open(EditTodoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result, 'result');
        this.todoListService.updateTodo(todo.id, result);
        this.todoList = this.todoListService.getTodoList;
      }
    });
  }

  showAll(): void {
    this.todoListService.cardAll();
    this.updateCard();
  }


  showActive(): void {
    this.todoListService.filterCardActive();
    this.updateCardActive();
  }

  showFinish(): void {
    this.todoListService.filterCardFinish();
    this.updateCardFinish();
  }

  private updateCardActive(): void {
    this.todoList = this.todoListService.getCardActive;
  }

  private updateCard(): void {
    this.todoList = this.todoListService.getTodoList;
  }

  private updateCardFinish() {
    this.todoList = this.todoListService.getCardFinish;
  }


  public sortSelectorNew(value: string): void {
    if (value === 'text') {
      this.todoListService.sortSelectText();
      this.updateCard();
    } else if (value === 'finish') {
      this.todoListService.sortSelectFinish();
      this.updateCard();
    } else if (value === 'not finished') {
      this.todoListService.sortSelectNot();
      this.updateCard();
    } else if (value === 'date') {
      this.todoListService.sortSelectDate();
      this.updateCard();
    }
  }
}
