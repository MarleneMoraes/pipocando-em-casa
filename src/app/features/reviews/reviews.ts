import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TmdbService } from '../../core/services/tmdb';
import { forkJoin, map } from 'rxjs';
import { ReviewItem } from '../../core/models/review.model';
import { ReviewCard } from '../../shared/components/review-card/review-card';
import { StarRating } from '../../shared/components/star-rating/star-rating';
import { BaseComponent } from '../../shared/classes/base-component/base-component';
import { MovieTechSheet } from '../../core/models/movie.model';
import { GenreDto } from '../../core/models/genre.model';
import { MovieSheetCard } from "./components/movie-sheet-card/movie-sheet-card";

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RouterLink, ReviewCard, MovieSheetCard],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews extends BaseComponent implements OnInit {
  private tmdbService = inject(TmdbService);

  movieSheets = signal<MovieTechSheet[]>([]);
  sidebarReviews = signal<ReviewItem[]>([]);
  loading = signal<boolean>(true);

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    forkJoin({
      movies: this.tmdbService.getPopularMovies(),
      genres: this.tmdbService.getGenres(),
    }).subscribe({
      next: (initialData) => {
        const moviesList = initialData.movies.results.slice(0, 5);
        const allGenres = initialData.genres.genres;

        const requests = moviesList.map((movie) =>
          forkJoin({
            credits: this.tmdbService.getMovieCredits(movie.id),
            reviews: this.tmdbService.getMovieReviews(movie.id),
          }).pipe(
            map((details) => ({
              movie,
              credits: details.credits,
              review: details.reviews.results[0],
            })),
          ),
        );

        forkJoin(requests).subscribe((fullData) => {
          const sheets: MovieTechSheet[] = fullData.map((item) => {
            return {
              movie: item.movie,
              posterUrl: `https://image.tmdb.org/t/p/w500${item.movie.poster_path}`,
              year: item.movie.release_date ? item.movie.release_date.split('-')[0] : 'N/A',

              director: item.credits.crew.find((c: any) => c.job === 'Director')?.name || 'Unknown',
              writer:
                item.credits.crew.find((c: any) => c.department === 'Writing')?.name ||
                'Screenplay',

              genreNames: this.mapGenres(item.movie.genre_ids, allGenres),

              popcornRating: item.movie.vote_average / 2,
            };
          });

          const sideReviews: ReviewItem[] = fullData
            .filter((item) => item.review)
            .map((item) => ({
              review: item.review,
              movieTitle: item.movie.title,
            }));

          this.movieSheets.set(sheets);
          this.sidebarReviews.set(sideReviews);
          this.loading.set(false);
        });
      },
      error: (e) => {
        console.error(e);
        this.loading.set(false);
      },
    });
  }

  private mapGenres(ids: number[], genres: GenreDto[]): string {
    return ids
      .map((id) => genres.find((g) => g.id === id)?.name)
      .filter(Boolean)
      .slice(0, 3)
      .join(', ');
  }
}
