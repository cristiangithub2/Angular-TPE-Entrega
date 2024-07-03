import { Component } from '@angular/core';
import { Book } from './book';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  books: Book[] = [
    {
      name: 'El nombre del viento',
      gender: 'Fantasía',
      price: 19375,
      stock: 4,
      image: 'assets/img/nombreDelViento.jpeg',
      clearence: true
    },
    {
      name: 'Bajo la misma estrella',
      gender: 'Romance',
      price: 14300,
      stock: 0,
      image: 'assets/img/nombreDelViento.jpeg',
      clearence: false
    },
    {
      name: 'El silencio de los corderos',
      gender: 'thriller',
      price: 14530,
      stock: 11,
      image: 'assets/img/nombreDelViento.jpeg',
      clearence: false
    },
  ];
}
