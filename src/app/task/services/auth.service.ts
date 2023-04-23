import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/auth/interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private head = new HttpHeaders().set(
    'Authorization',
    `Bearer ${localStorage.getItem('token')}`
  );

  constructor(private httpClient: HttpClient) {}

  obtenerTareasUsuario(): any {
  
    return this.httpClient.get('api/v1/task/', {
      headers: this.head,
    });
  }

  crearTareas(task: any) {
    return this.httpClient.post('api/v1/task/create', task, { headers: this.head });
  }

  actualizarTarea(task: Task) {
    return this.httpClient.put(`api/v1/task/edit/${task.id}`,task, { headers: this.head });
  }

  obtenerTare(id : any) : Observable<Task>{
    return this.httpClient.get<Task>(`api/v1/task/${id}`, { headers: this.head });
  }

  elimnarTarea(id : any){
    return this.httpClient.delete(`api/v1/task/delete/${id}`, { headers: this.head });
  }
}
