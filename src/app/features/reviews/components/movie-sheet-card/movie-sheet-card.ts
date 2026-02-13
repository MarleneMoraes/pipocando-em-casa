import { Component, Input } from '@angular/core';
import { StarRating } from '../../../../shared/components/star-rating/star-rating';
import { CommonModule } from '@angular/common';
import { MovieTechSheet } from '../../../../core/models/movie.model';

@Component({
  selector: 'app-movie-sheet-card',
  standalone: true,
  imports: [CommonModule, StarRating],
  templateUrl: './movie-sheet-card.html',
  styleUrl: './movie-sheet-card.scss',
})
export class MovieSheetCard {
  @Input({ required: true }) sheet!: MovieTechSheet;
}
