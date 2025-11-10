import { Component } from "@angular/core";
import { Article } from "../../model/article";
@Component({
    selector: 'app-eteshetch',
    templateUrl: './eteshetch.html',
    styleUrls: ['./eteshetch.css']
})

export class EteShetch {
    articles!: Article[];
    url = 'http://localhost:3000/articles';
    
    async ngOnInit() {
        try {
            let response = await fetch(this.url);
            let data = await response.json();
            if (!response.ok) throw new Error('Error');
            this.articles = data;
        } catch (error) {
            console.log(error);
        }
    }
}