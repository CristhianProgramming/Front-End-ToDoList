import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  constructor(private fb:FormBuilder,private service:AuthService,private active:ActivatedRoute){}


  formulario : FormGroup = this.fb.group({
    id : [],
    nameTask: [,Validators.required],
    descriptionTask: [],
    startDate: [],
    limitDate: [],
    complet: []
  })


  ngOnInit(): void {
    const isEdit : string | null = this.active.snapshot.paramMap.get("id")!

    if (isEdit != null) {
      this.service.obtenerTare(isEdit).subscribe(r=>{
        this.formulario.reset({
          id: r.id,
          nameTask : r.nameTask,
          descriptionTask : r.descriptionTask,
          startDate : format(new Date(r.startDate), 'yyyy-MM-dd') == "1969-12-31" ? null :  format(new Date(r.startDate), 'yyyy-MM-dd')   , 
          limitDate : format(new Date(r.limitDate), 'yyyy-MM-dd') == "1969-12-31" ? null :  format(new Date(r.limitDate), 'yyyy-MM-dd')  ,
          complet : r.complet
          
        })
      } 
      )
    }
  }



  eliminarTarea(id : number){
    this.service.elimnarTarea(id).subscribe(console.log)
  }

  crearTarea(){
    if (this.formulario.value.id != null) {
      this.service.actualizarTarea(this.formulario.value).subscribe(console.log)
      return;
    }
    this.service.crearTareas(this.formulario.value).subscribe(console.log)
  }
}
