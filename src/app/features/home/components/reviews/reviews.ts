import { Component, inject, input, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TmdbService } from '../../../../core/services/tmdb';
import { MovieDto } from '../../../../core/models/movie.model';
import { ReviewCard } from '../../../../shared/components/review-card/review-card';
import { RouterLink } from '@angular/router';
import { ReviewItem } from '../../../../core/models/review.model';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RouterLink, ReviewCard],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})

export class Reviews {
  private tmdbService = inject(TmdbService);
  moviesList = input.required<MovieDto[]>();

  displayItems = signal<ReviewItem[]>([]);
  private usedAuthors = new Set<string>();

  constructor() {
    effect(() => {
      const movies = this.moviesList();
      if (movies.length > 0) {
        this.usedAuthors.clear();
        this.displayItems.set([]);

        const randomMovies = [...movies].sort(() => 0.5 - Math.random()).slice(0, 3);

        randomMovies.forEach((movie) => {
          this.tmdbService.getMovieReviews(movie.id).subscribe((res) => {
            if (res.results.length > 0) {
              let chosenReview = res.results.find((r) => !this.usedAuthors.has(r.author));
              if (!chosenReview) chosenReview = res.results[0];

              this.usedAuthors.add(chosenReview.author);

              this.displayItems.update((list) => [
                ...list,
                { review: chosenReview!, movieTitle: movie.title },
              ]);
            }
          });
        });
      }
    });
  }
}
