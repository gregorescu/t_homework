import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


//Config file for server should be added based on running and built on environment (development, staging, production)
@Injectable({
  providedIn: 'root'
})
export class FileService {
  private serverUrl: String = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  //Get files call based on user id should be added


  public uploadFile(formData: FormData) {
    return this.http.post<any>(`${this.serverUrl}/login`, formData);
  }
}
