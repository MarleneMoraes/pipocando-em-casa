import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieDto } from '../../core/models/movie.model';
import { TmdbService } from '../../core/services/tmdb';
import { StarRating } from '../../shared/components/star-rating/star-rating';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule, StarRating],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search implements OnInit {
  private route = inject(ActivatedRoute);
  private tmdbService = inject(TmdbService);

  query = signal<string>('');
  results = signal<MovieDto[]>([]);
  loading = signal<boolean>(false);

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.query.set(params['query']);
      this.performSearch(this.query());
    });
  }

  performSearch(query: string) {
    this.loading.set(true);
    this.tmdbService.searchMovies(query).subscribe({
      next: (res) => {
        this.results.set(res.results);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

}
