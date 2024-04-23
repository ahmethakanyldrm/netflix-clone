import { Component, Input } from '@angular/core';
import { Movie } from '../../types/movies';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-category',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-category.component.html',
  styleUrl: './movie-category.component.scss'
})
export class MovieCategoryComponent {
  @Input() title = "";
  @Input() movieList: Movie[] = [];
}
