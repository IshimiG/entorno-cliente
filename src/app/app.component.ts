import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { BookComponent } from './components/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { TrabajadoresComponent } from "./components/trabajadores/trabajadores";
import { TRABAJADORES } from './model/trabajador';

import { ObservablesComponent } from './components/observables/observables';
import { Contador1Component } from "./components/contador1/contador1.component";
import { Contador2Component } from "./components/contador2/contador2.component";
import { HeaderComponent } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleComponent, BookComponent, HttpClientModule, TrabajadoresComponent, ObservablesComponent, Contador1Component, Contador2Component, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  desactivado: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.desactivado = false;
    }, 3000);
  }

  title = 'project1';

  listaTrabajadores = TRABAJADORES

}
