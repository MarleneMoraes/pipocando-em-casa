import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss',
})
export class StarRating {
  protected filledStars: number[] = [];
  protected emptyStars: number[] = [];

  @Input() set rating(value: number) {
    this.calculateStars(value);
  }

  private calculateStars(value: number) {
    const starCount = Math.round(value > 5 ? value / 2 : value);

    this.filledStars = new Array(starCount).fill(0);
    this.emptyStars = new Array(5 - starCount).fill(0);
  }
}
