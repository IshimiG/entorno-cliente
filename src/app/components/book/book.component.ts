import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  BOOKS: Book[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<Book[]>('http://localhost:8080/api/books')
      .subscribe(data => {
        this.BOOKS = Array.isArray(data) ? data : [];
      });
  }
}
