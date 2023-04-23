import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';


const routes: Routes = [

{path:'auth' ,loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
{path:'task' ,loadChildren:()=>import('./task/task.module').then(m=>m.TaskModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
