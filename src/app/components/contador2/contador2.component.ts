import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContadorService } from '../../service/contador/contador.service';

@Component({
  selector: 'app-contador2',
  imports: [],
  templateUrl: './contador2.html'
})
export class Contador2Component {

  contador: number = 0

  miSuscripcion!: Subscription

  constructor(private contadorService: ContadorService) {}

  ngOnInit() {
    this.miSuscripcion = this.contadorService.contador.subscribe({ 
        next: a => this.contador = a
    });
  }
  ngOnDestroy() {
    this.miSuscripcion.unsubscribe();
  }

  incrementar() {
    this.contadorService.aumentar()
  }

}
