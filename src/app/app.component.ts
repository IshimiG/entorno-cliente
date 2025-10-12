import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { BookComponent } from './components/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { FrutasComponent } from './components/frutas/frutas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticleComponent, BookComponent, HttpClientModule],
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
}
