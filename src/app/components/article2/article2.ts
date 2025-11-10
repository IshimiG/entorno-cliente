import { Component, inject, Inject } from "@angular/core";
import { Article } from "../../model/article";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { ArticlesService } from "../../service/articles/articles.service";

@Component({
    selector: 'app-article2',
    imports: [RouterLink],
    templateUrl: './article2.html'
})

export class Article2Component {
    articles!:Article[];

    // constructor(
    //     private servicio: ArticlesService,
    // ) { }

    servicio=inject(ArticlesService)

    ngOnInit() {
        this.servicio.getArticulos();
    }

    delete(id: string) {
        this.servicio.delete(id)
    }
}