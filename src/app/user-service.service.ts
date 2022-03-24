import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


//Config file for server should be added based on running and built on environment (development, staging, production)
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverUrl: String = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  public login(email: String, password: String) {
    return this.http.post(`${this.serverUrl}/login`, {
      email: email,
      password: password,
    })
  }


  //create user call should be added
}
