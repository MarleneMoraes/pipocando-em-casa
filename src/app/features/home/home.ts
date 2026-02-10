import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MovieDto } from '../../core/models/movie.model';
import { TmdbService } from '../../core/services/tmdb';
import { Releases } from './components/releases/releases';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Releases],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private tmdbService = inject(TmdbService);

  popularMovies = signal<MovieDto[]>([]);

  ngOnInit(): void {
    this.tmdbService.getPopularMovies(1, 'en-US').subscribe({
      next: (response) => {
        this.popularMovies.set(response.results.slice(0, 5));
      },
      error: (error) => console.error('Erro ao buscar filmes:', error),
    });
  }
}
