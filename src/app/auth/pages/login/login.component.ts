import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private service:AuthService){}

  miformulario : FormGroup = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })

  sendFormulario(){
    this.service.authenticate(this.miformulario.value).subscribe(console.log)
  }
}
