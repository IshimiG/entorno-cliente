import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TrabajadorComponent } from '../trabajador/trabajador';
import { Trabajador } from '../../model/trabajador';

@Component({
    selector: 'app-trabajadores',
    templateUrl: './trabajadores.html',
    imports: [TrabajadorComponent],

})
export class TrabajadoresComponent {
    @Input() trabajadores: Trabajador[] = [];
    @Input() titulo: string = "Lista de Trabajadores";

}
