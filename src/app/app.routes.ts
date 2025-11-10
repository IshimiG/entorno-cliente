import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body';
import { Article2Component } from './components/article2/article2';
import { ErrorHandler } from '@angular/core';
import { ArticleComponent } from './components/article/article.component';
import { articulosGuard } from './guards/articulos.guard';
import { loginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { EteShetch } from './components/eteshetch/eteshetch';

export const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'articulos', component: Article2Component, canActivate:[loginGuard] },
    { path: 'eteshetch', component: EteShetch },
    { path: 'articulo/:id', component: ArticleComponent, canActivate:[articulosGuard] },
    { path: 'login', component:LoginComponent},
    { path: '**', component: ErrorHandler}
];
