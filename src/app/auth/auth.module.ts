import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistreComponent } from './pages/registre/registre.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';

@NgModule({
  declarations: [LoginComponent, RegistreComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    ReactiveFormsModule
  
  ],
  exports: [LoginComponent, RegistreComponent],
})
export class AuthModule {}
