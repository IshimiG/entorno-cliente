import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body';
import { Article2Component } from './components/article2/article2';
import { ErrorHandler } from '@angular/core';
import { ArticleComponent } from './components/article/article.component';

export const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'articulos', component: Article2Component },
    { path: 'articulo/:id', component: ArticleComponent },
    { path: '**', component: ErrorHandler}
];
