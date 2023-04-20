import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './page/list/list.component';
import { TaskComponent } from './page/task/task.component';
import { CreateTaskComponent } from './page/create-task/create-task.component';



@NgModule({
  declarations: [
    ListComponent,
    TaskComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
