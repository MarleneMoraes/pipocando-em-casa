import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TmdbService } from '../../core/services/tmdb';
import { MovieDto } from '../../core/models/movie.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './news.html',
  styleUrl: './news.scss'
})
export class News implements OnInit {
  private tmdbService = inject(TmdbService);
  private location = inject(Location);

  upcomingMovies = signal<MovieDto[]>([]);
  genresMap = signal<Map<number, string>>(new Map());
  loading = signal<boolean>(true);

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    forkJoin({
      genres: this.tmdbService.getGenres(),
      movies: this.tmdbService.getUpcomingMovies()
    }).subscribe({
      next: (data) => {
        const map = new Map<number, string>();
        data.genres.genres.forEach(g => map.set(g.id, g.name));
        this.genresMap.set(map);

        this.upcomingMovies.set(data.movies.results);

        this.loading.set(false);
      },
      error: (e) => {
        console.error(e);
        this.loading.set(false);
      }
    });
  }

  getGenreName(id: number): string {
    return this.genresMap().get(id) || '';
  }

  getImageUrl(movie: MovieDto): string {
    if (movie.backdrop_path) {
      return `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
    }
    if (movie.poster_path) {
      return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    
    return '';
  }

  goBack() {
    this.location.back();
  }
}
