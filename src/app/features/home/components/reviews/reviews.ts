import { Component, inject, input, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewDisplay, ReviewDto } from '../../../../core/models/review.model';
import { TmdbService } from '../../../../core/services/tmdb';
import { MovieDto } from '../../../../core/models/movie.model';
import { StarRating } from '../../../../shared/components/star-rating/star-rating';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, StarRating],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews {
  private tmdbService = inject(TmdbService);
  moviesList = input.required<MovieDto[]>();

  reviewsDisplay = signal<ReviewDisplay[]>([]);

  private usedAuthors = new Set<string>();

  constructor() {
    effect(() => {
      const movies = this.moviesList();

      if (movies.length > 0) {
        this.usedAuthors.clear();
        this.reviewsDisplay.set([]);

        const randomMovies = [...movies].sort(() => 0.5 - Math.random()).slice(0, 3);

        randomMovies.forEach((movie) => {
          this.tmdbService.getMovieReviews(movie.id).subscribe((res) => {
            if (res.results.length > 0) {
              let chosenReview = res.results.find((r) => !this.usedAuthors.has(r.author));

              if (!chosenReview) {
                chosenReview = res.results[0];
              }

              this.usedAuthors.add(chosenReview.author);

              this.addReview(movie, chosenReview);
            }
          });
        });
      }
    });
  }

  private addReview(movie: MovieDto, review: ReviewDto) {
    const rating = review.author_details.rating || 0;
    const filledCount = Math.round(rating / 2);

    const newReview: ReviewDisplay = {
      movieTitle: movie.title,
      author: review.author,
      content: this.cleanContent(review.content),
      date: review.created_at,
      avatar: this.getAvatar(review.author_details.avatar_path, review.author),
      rating: rating,
      stars: Array(filledCount).fill(0),
      emptyStars: Array(5 - filledCount).fill(0),
    };

    this.reviewsDisplay.update((list) => [...list, newReview]);
  }

  cleanContent(text: string): string {
    let clean = text;

    clean = clean.replace(/https?:\/\/[^\s]+/g, '');
    clean = clean.replace(/^(Full review|Written by|Rating).*?(\n|\r|$)/gmi, '');
    clean = clean.replace(/^[\s:\-]+/, '');
    clean = clean.replace(/\s+/g, ' ').trim();

    return clean;
  }

  getAvatar(path: string | null, name: string): string {
    if (!path) {
      return `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;
    }

    if (path.startsWith('/http')) {
      return path.substring(1);
    }

    return `https://image.tmdb.org/t/p/w150_and_h150_face${path}`;
  }

  handleImageError(event: any, name: string) {
    event.target.src = `https://ui-avatars.com/api/?name=${name}&background=ddd&color=333`;
  }
}
