import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {
  constructor(private r:Router){}

  public isLogin : boolean = false;

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isLogin= true;
    }
  }


  clearSession(){
    localStorage.clear()
    location.reload()
  }
}
