import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public tasks : any[] = [];

  constructor(private service : AuthService){}

  ngOnInit(): void {
    this.service.obtenerTareasUsuario().subscribe((r: any[]) => {this.tasks = r ; console.log(r)})
  }

  eliminarTarea(id : number){
    this.service.elimnarTarea(id).subscribe(console.log)
    location.reload()
  }

}
