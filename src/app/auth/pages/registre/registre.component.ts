import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit{
 
  public token :String | null = null;
 
  miformulario : FormGroup = this.fb.group({
    firstname:[,[Validators.required]],
    lastname:[],
    email:[,[Validators.required,Validators.email]],
    password:[,[Validators.required,Validators.minLength(8)]],
    password2:[,[Validators.required,Validators.minLength(8)]]
})


  constructor(private fb:FormBuilder,private service:AuthService,private router :Router){}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token){
      this.router.navigate(['task'])
    }
  }

  sendFormulario(){
    if (this.token != null) {
      return;
    }
    this.service.register(this.miformulario.value).subscribe(r=>{
      const token = r.token
      if (token != null) {
        this.token = token
        localStorage.setItem('token',token)
        location.reload()
      }
     
    });
  }

}
