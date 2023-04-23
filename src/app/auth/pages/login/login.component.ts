import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  private token :String | null = null;
 
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token){
      this.router.navigate(['task'])
    }
  }
  constructor(private fb:FormBuilder,private service:AuthService,private router:Router){}
  

  miformulario : FormGroup = this.fb.group({
    email:['m11mario11m@gmail.com',Validators.required],
    password:[12345678,Validators.required]
  })

  sendFormulario(){
    this.service.authenticate(this.miformulario.value).subscribe(r => {
      const token = r.token
      if(token != null){
      this.token = token
      localStorage.setItem('token',token)
      location.reload()
    }
    })
  }
}
