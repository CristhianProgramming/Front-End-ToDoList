import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistreComponent } from './pages/registre/registre.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
