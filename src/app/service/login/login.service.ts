import { Injectable } from '@angular/core';
import { User, USUARIOS } from '../../model/users';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogged = false;
  private  _name:BehaviorSubject<string> = new BehaviorSubject("")
  public readonly $name:Observable<string> = this._name.asObservable()
  usr!:string

  constructor() { }
  
  getUsers() {
    return USUARIOS;
  }

  login(name:string,psswd:string) {
    if(this.getUsers().find(a => a.name === name && a.password === psswd)) {
      this.isLogged = true;
      this.usr = name;
    }
    else this.isLogged = false;
  }

  getUser() {
      return this._name.next("usr")
  }

  unlog() {
    this.isLogged = false
  }
}
