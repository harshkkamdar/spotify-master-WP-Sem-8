import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){
    return !!localStorage.getItem('token')
  }

  login(){
    localStorage.setItem('token','your-token')
  }
}
