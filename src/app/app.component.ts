import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { BookComponent } from './components/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { TrabajadoresComponent } from "./components/trabajadores/trabajadores";
import { TRABAJADORES } from './model/trabajador';

import { ObservablesComponent } from './components/observables/observables';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleComponent, BookComponent, HttpClientModule, TrabajadoresComponent, ObservablesComponent],
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
