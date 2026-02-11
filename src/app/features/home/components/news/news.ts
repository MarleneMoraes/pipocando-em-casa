import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieDto } from '../../../../core/models/movie.model';
import { TmdbService } from '../../../../core/services/tmdb';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './news.html',
  styleUrl: './news.scss',
})
export class News implements OnInit {
  private tmdbService = inject(TmdbService);

  upcomingMovies = signal<MovieDto[]>([]);
  genresMap = signal<Map<number, string>>(new Map());

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.tmdbService.getGenres().subscribe(res => {
      const map = new Map<number, string>();
      res.genres.forEach(g => map.set(g.id, g.name));
      this.genresMap.set(map);
    });

    this.tmdbService.getUpcomingMovies().subscribe({
      next: (res) => {
        this.upcomingMovies.set(res.results.slice(0, 3));
      },
      error: (e) => console.error(e)
    });
  }

  getGenreName(id: number): string {
    return this.genresMap().get(id) || 'Cinema';
  }

}
