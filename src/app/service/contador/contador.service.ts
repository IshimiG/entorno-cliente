import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private _contador:number = 0;

  contador:BehaviorSubject<number>=new BehaviorSubject(0)
  public readonly contador$: Observable<number>=this.contador.asObservable()

  constructor() { }

  aumentar() {
    this.contador.next(this._contador++);
  }

}
