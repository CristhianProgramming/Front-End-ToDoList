import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './page/list/list.component';
import { TaskComponent } from './page/task/task.component';
import { CreateTaskComponent } from './page/create-task/create-task.component';

export const routes: Routes = [
  
    {path:'',component:ListComponent},
    {path:':id',component:TaskComponent},
    {path:'create',component:CreateTaskComponent},
    {path:'edit/:id',component:CreateTaskComponent},
    {path:'**',redirectTo:''}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TaskRoutingModule { }
  