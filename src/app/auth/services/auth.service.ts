import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class AuthService {


  private Url = "api/v1/auth/"

  constructor(private http: HttpClient) {}

  authenticate(userCredentials : any) :any{
    return this.http.post(`${this.Url}login`,userCredentials)
  }
}
