import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient) {}
  
  put(path: string, body: object){
    return this.http.put(`${environment.api_url}${path}`,JSON.stringify(body))
  };
  
  get(path: string){
    return this.http.get(`${environment.api_url}${path}`)
  }

  post(path: string, body: object){
    return this.http.post(`${environment.api_url}${path}`,JSON.stringify(body))
  }

  delete(path: string){
    return this.http.delete(`${environment.api_url}${path}`)
  }
}
