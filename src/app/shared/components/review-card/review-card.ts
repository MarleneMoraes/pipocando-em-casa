import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRating } from '../star-rating/star-rating';
import { ReviewDto } from '../../../core/models/review.model';


@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule, StarRating],
  templateUrl: './review-card.html',
  styleUrl: './review-card.scss'
})
export class ReviewCard {
review = input.required<ReviewDto>();
  movieTitle = input.required<string>();

  cleanContent = computed(() => {
    const text = this.review().content;
    let clean = text.replace(/https?:\/\/[^\s]+/g, '');
    clean = clean.replace(/^(Full review|Written by|Rating).*?(\n|\r|$)/gmi, '');
    clean = clean.replace(/^[\s:\-]+/, '');
    return clean.replace(/\s+/g, ' ').trim();
  });

  avatarUrl = computed(() => {
    const path = this.review().author_details.avatar_path;
    const name = this.review().author;

    if (!path) return `https://ui-avatars.com/api/?name=${name}&background=random&color=fff`;
    if (path.startsWith('/http')) return path.substring(1);
    return `https://image.tmdb.org/t/p/w150_and_h150_face${path}`;
  });

  rating = computed(() => this.review().author_details.rating || 0);

  date = computed(() => new Date(this.review().created_at));

  handleImageError(event: any) {
    const name = this.review().author;
    event.target.src = `https://ui-avatars.com/api/?name=${name}&background=ddd&color=333`;
  }
}
