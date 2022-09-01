import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TodoCard} from "../../../../interfaces/application.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  public formGroup:FormGroup = new FormGroup({});
  public modalData! : TodoCard ;

  public saveChange(): void {
    this.dialogRef.close(this.formGroup.value);
  }

  public close():void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.modalData = this.data;
    this.initFormGroup();
  }


  constructor(@Inject(MAT_DIALOG_DATA)
        private readonly data:TodoCard,
        private dialogRef:MatDialogRef<EditTodoComponent>) {

  }

  private initFormGroup():void{
    this.formGroup.setControl('title' , new FormControl(this.modalData.title , [Validators.required]));
    this.formGroup.setControl('deadlineDate' , new FormControl(this.modalData.deadlineDate || '', [Validators.required]));
  }

}
