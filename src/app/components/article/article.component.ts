import { Component } from '@angular/core';
import { ARTICLES } from '../../model/article';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  articles=ARTICLES;
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