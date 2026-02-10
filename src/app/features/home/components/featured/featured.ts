import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieDto } from '../../../../core/models/movie.model';
import { GenreDto } from '../../../../core/models/genre.model';
import { TmdbService } from '../../../../core/services/tmdb';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './featured.html',
  styleUrl: './featured.scss',
})
export class Featured implements OnInit {
  private tmdbService = inject(TmdbService);

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
      error: (e) => console.error(e)
    });
  }

  loadMovies() {
    this.tmdbService.getMoviesByGenre(this.selectedGenreId()).subscribe({
      next: (res) => {
        this.movies.set(res.results.slice(0, 4));
      },
      error: (e) => console.error(e)
    });
  }

  onGenreChange() {
    this.loadMovies();
  }

}
