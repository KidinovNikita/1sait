export interface TodoCard{
  isFinished: boolean;
  id:number;
  title:string;
  dateOfCreation:Date;
  deadlineDate?:Date;

}
