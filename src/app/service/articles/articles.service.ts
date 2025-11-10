import { Injectable } from '@angular/core';
import { Article } from '../../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  article!: Article[];
  url = 'http://localhost:3000/articles';


  getArticulos() {
    return this.article

  }

  getArticulo(id: string) {
    let search=this.article.findIndex(a=>a.id=id)
    return this.article[search]
  }

  postArticulo(articulo: Article) {
    let search=this.article.findIndex(a=>a.id==articulo.id)
    if (search == 1) 
      this.article.push(articulo)
    else 
      alert("Ya existe un articulo con ese id")
  }

  putArticulo(articulo: Article) {
    let search=this.article.findIndex(a=>a.id==articulo.id)
    this.article[search]=articulo
  }

  delete(id: string) {
    let search=this.article.findIndex(a=>a.id==id)
    this.article.splice(search, 1)
  }
}
