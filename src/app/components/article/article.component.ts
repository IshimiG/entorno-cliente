import { Component, Inject } from '@angular/core';
import { ARTICLES } from '../../model/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  articles=ARTICLES;

  constructor(private router: Router) { }  // <-- inyección correcta
  
  volver() {
    this.router.navigate(["/articulos"])
  }

  methodForArticles() {
    this.articles.forEach(article => {
      console.log(article.nombre + " " + article.precio);
  
    });
  }

  methodOrderbyPrice() {
    this.articles.sort((a, b) => a.precio - b.precio);
    console.log(this.articles);
  }

  methodFilterByCategory(category: string) {
    const filteredArticles = this.articles.filter(article => article.categoria === category);
    console.log(filteredArticles);
  }
}