import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { TmdbService } from '../../../core/services/tmdb';
import { FormsModule } from '@angular/forms';
import { MovieDto } from '../../../core/models/movie.model';
import { GenreDto } from '../../../core/models/genre.model';

@Component({
  selector: 'app-genre-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './genre-filter.html',
  styleUrl: './genre-filter.scss',
})
export class GenreFilter implements OnInit {
  private tmdbService = inject(TmdbService);

  @Input() limit: number = 20;
  @Input() showTitle: boolean = true;

  @Input() isPreview: boolean = false;

  movies = signal<MovieDto[]>([]);
  genres = signal<GenreDto[]>([]);

  selectedGenreId = signal<string>('');

  ngOnInit(): void {
    this.loadGenres();
    this.loadMovies();
  }

  loadGenres() {
    this.tmdbService.getGenres().subscribe({
      next: (res) => this.genres.set(res.genres),
      error: (e) => console.error(e),
    });
  }

  loadMovies() {
    this.tmdbService.getMoviesByGenre(this.selectedGenreId()).subscribe({
      next: (res) => {
        this.movies.set(res.results.slice(0, this.limit));
      },
      error: (e) => console.error(e),
    });
  }

  onGenreChange() {
    this.loadMovies();
  }
}
