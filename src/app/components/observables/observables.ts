import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";

@Component ({
    selector: 'app-observables',
    standalone: true,
    imports: [CommonModule],
    template: '<ng-content></ng-content>'
})
export class ObservablesComponent {
    
    mensaje:BehaviorSubject<string>=new BehaviorSubject('Valor inicial')
    mensaje$: Observable<string> = this.mensaje.asObservable()

    miSuscripcion!: Subscription

    emitir() {
        console.log('Emitimos valores por el observable')
        this.mensaje.next("Valor 1")
        this.mensaje.next("Valor 2")
        this.mensaje.next("Valor n")
    }

    subscribir() {
        console.log('Nos suscribimos. Recibiremos todos los datos que se emitan')
        this.miSuscripcion = this.mensaje$.subscribe({
            next: dato => console.log(dato),
            error: error => console.log(error),
            complete: () => console.log('Observable completado')
        })
    }

    subscribirDeprecated(){
        console.log('Nos suscribimos. Recibiremos todos los datos que se emitan')
        this.miSuscripcion = this.mensaje$.subscribe(
            dato => console.log(dato),
            error => console.error(error),
            () => console.log('Observable completado')
        )
    }

    cancelar() {
        this.miSuscripcion.unsubscribe()
        console.log('SUscripcion cancelada. No se recibiran mas datos.')
    }

    finalizar() {
        this.mensaje.complete()
        console.log('Observable Completado. Ya no se emitiran mas datos')
    }

}
