import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MovieDto } from '../../../../core/models/movie.model';
import { VideoDto } from '../../../../core/models/video.model';
import { SafeUrlPipe } from '../../../../core/pipes/safe-pipe';
import { StarRating } from '../../../../shared/components/star-rating/star-rating';

@Component({
  selector: 'app-making-of',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, StarRating, SafeUrlPipe],
  templateUrl: './making-of.html',
  styleUrl: './making-of.scss',
})
export class MakingOf {
  movies = input.required<MovieDto[]>();
  videoMap = input<Map<number, VideoDto>>(new Map());
}
