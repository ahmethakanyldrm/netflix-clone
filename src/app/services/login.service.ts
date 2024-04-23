import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email:string, password: string) {
    // login user here
    localStorage.setItem("token", Math.random()+"");
  }
}
