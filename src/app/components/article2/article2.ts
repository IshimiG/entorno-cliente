import { Component } from "@angular/core";
import { ARTICLES } from "../../model/article";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-article2',
    imports: [RouterLink],
    templateUrl: './article2.html'
})

export class Article2Component {
    articles=ARTICLES

}