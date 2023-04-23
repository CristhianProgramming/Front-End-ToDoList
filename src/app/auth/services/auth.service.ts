import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Register, ResponseAuth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})


export class AuthService {


  private Url = "api/v1/auth/"

  constructor(private http: HttpClient) {}

  authenticate(userCredentials : Login) :Observable<ResponseAuth>{
    return this.http.post<ResponseAuth>(`${this.Url}login`,userCredentials)
  }

  register(userCredentials : Register) :Observable<ResponseAuth>{
    return this.http.post<ResponseAuth>(`${this.Url}register`,userCredentials);
  }
}
