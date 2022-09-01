import {Injectable} from "@angular/core";
import {TodoCard} from "../interfaces/application.interface";

@Injectable({
  providedIn:"root",
})
export class TodoListService {
  private todoList: TodoCard[] = [{
    isFinished: false,
    id:0,
    title:'Card Angular',
    dateOfCreation:new Date(2020,8,25),
    deadlineDate:new Date(),
    },
    {
      isFinished: false,
      id:1,
      title:'ToDo Angular',
      dateOfCreation:new Date(2022,6,30),
      deadlineDate:new Date(),
    },
    {
      isFinished: false,
      id:2,
      title:'List Angular',
      dateOfCreation:new Date(2015,1,9),
      deadlineDate:new Date(),
    },
  ];

  private finishCardArr : TodoCard [] = [];
  private activeCardArr : TodoCard [] = [];


  public get getTodoList(): TodoCard[] {
    return this.todoList;
  }
  public get getCardFinish(): TodoCard[] {
    return this.finishCardArr;
  }
  public get getCardActive(): TodoCard[] {
    return this.activeCardArr;
  }


  public set setNewTodo(todoTitle: string) {
    const newTodo: TodoCard = {
      isFinished: false,
      title: todoTitle,
      dateOfCreation: new Date(),
      id: Math.floor(Math.random() * 1000),
    };
    this.todoList = [...this.todoList, newTodo];
  }

  public set setNewTodoStatusId(id: number) {
    this.todoList = this.todoList.map((el: TodoCard) => {
      return {
        ...el,
        isFinished: el.id === id ? !el.isFinished : el.isFinished,
      };
    });
  }


  public deleteTodoId(id: number): void {
    this.todoList = this.todoList.filter((el: TodoCard) => el.id !== id);
  }

  public updateTodo(id: number, newData: { title: string; deadlineDate: Date }): void {
    this.todoList = this.todoList.map((el: TodoCard) => ({
      ...el,
      title: el.id === id ? newData.title : el.title,
      deadlineDate: el.id === id ? newData.deadlineDate : el.deadlineDate,
    }));
  }

  public cardAll():TodoCard[] {
   return this.todoList
  }

  public filterCardActive():void {
  this.activeCardArr = this.todoList.filter((el:TodoCard) => !el.isFinished)
  }

  filterCardFinish() {
    this.finishCardArr = this.todoList.filter((el:TodoCard) => el.isFinished)
  }

  public sortSelectText():any {
    this.todoList = this.todoList.sort((ObjA:TodoCard,ObjB:TodoCard): string | any => {
      if (ObjA.title > ObjB.title){
        return 1;
      }else if (ObjA.title < ObjB.title){
        return -1;
      }
    })
    return 0;
  }
  public sortSelectFinish():any {
    this.todoList = this.todoList.sort((ObjA:TodoCard,ObjB:TodoCard): number | any => {
      if (ObjA.isFinished > ObjB.isFinished){
        return -1;
      }else if (ObjA.isFinished < ObjB.isFinished){
        return 1;
      }
    });
  }
  public sortSelectNot():any {
    this.todoList = this.todoList.sort((ObjA:TodoCard,ObjB:TodoCard): number | any => {
      if (ObjA.isFinished > ObjB.isFinished){
        return 1;
      }else if (ObjA.isFinished < ObjB.isFinished){
        return -1;
      }
    });
  }
  public sortSelectDate() {
    this.todoList = this.todoList.sort((ObjA:TodoCard,ObjB:TodoCard): number | any => {
      if (ObjA.dateOfCreation > ObjB.dateOfCreation){
        return 1;
      }else if (ObjA.dateOfCreation < ObjB.dateOfCreation){
        return -1;
      }
    });
    return 0;
  }
}
