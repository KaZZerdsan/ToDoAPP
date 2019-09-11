import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

    getToken(){
      localStorage.getItem['token'];
    }
    saveToken(){
      localStorage.setItem['token'];
    }
    destroyToken(){
      localStorage.removeItem['token'];
    }
  constructor() { }
}
