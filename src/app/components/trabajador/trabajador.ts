import { Component, Input, EventEmitter } from '@angular/core';
import { Trabajador, TRABAJADORES } from '../../model/trabajador';

@Component({
    selector: 'app-trabajador',
    templateUrl: './trabajador.html',
})
export class TrabajadorComponent {
    trabajadores=TRABAJADORES;
    @Input() trabajador!: Trabajador;
}