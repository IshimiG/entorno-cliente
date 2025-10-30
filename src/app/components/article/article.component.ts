import { Component, inject } from '@angular/core';
import { Article, ARTICLES } from '../../model/article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../../service/articles/articles.service';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  article!:Article;


  // constructor(private router: Router,
  //   private miRutaActiva: ActivatedRoute,
  //   private servicio: ArticlesService
  // ) { }  // <-- inyección correcta

  router=inject(Router)
  miRutaActiva=inject(ActivatedRoute)
  servicio=inject(ArticlesService)


  volver() {
    this.router.navigate(["/articulos"])
  }

  ngOnInit() {
    this.miRutaActiva.params.subscribe(params=>this.article=this.servicio.getArticulo(params['id']))
  }

  // methodForArticles() {
  //   this.articles.forEach(article => {
  //     console.log(article.nombre + " " + article.precio);
  
  //   });
  // }

  // methodOrderbyPrice() {
  //   this.articles.sort((a, b) => a.precio - b.precio);
  //   console.log(this.articles);
  // }

  // methodFilterByCategory(category: string) {
  //   const filteredArticles = this.articles.filter(article => article.categoria === category);
  //   console.log(filteredArticles);
  // }
}