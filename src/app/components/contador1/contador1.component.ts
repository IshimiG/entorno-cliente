import { Component, inject, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContadorService } from '../../service/contador/contador.service';

@Component({
  selector: 'app-contador1',
  imports: [],
  templateUrl: './contador1.html'
})
export class Contador1Component {
  contador: number = 0
  miSuscripcion!: Subscription
  contadorService=inject(ContadorService) // POliticamente incorrecta Limoncio🍋🍋

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
