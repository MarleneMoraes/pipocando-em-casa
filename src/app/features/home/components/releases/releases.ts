import { CommonModule } from '@angular/common';
import { Component, input, effect, OnDestroy, signal, computed } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MovieDto } from '../../../../core/models/movie.model';
import { StarRating } from '../../../../shared/components/star-rating/star-rating';

@Component({
  selector: 'app-releases',
  standalone: true,
  imports: [CommonModule, MatIconModule, StarRating],
  templateUrl: './releases.html',
  styleUrl: './releases.scss',
})
export class Releases implements OnDestroy {
  movies = input.required<MovieDto[]>();

  currentSlideIndex = signal(0);

  currentMovie = computed(() => {
    const list = this.movies();
    const index = this.currentSlideIndex();
    return list.length > 0 ? list[index] : null;
  });

  private autoPlayTimer: any;

  constructor() {
   effect(() => {
      const movieList = this.movies();
      if (movieList.length > 0) {
        this.currentSlideIndex.set(0);
        this.startAutoPlay();
      }
    });
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  nextSlide() {
    const total = this.movies().length;
    if (total > 0) {
      this.currentSlideIndex.update(idx => (idx + 1) % total);
    }
  }

  // Timer functions
  startAutoPlay() {
    this.stopAutoPlay();

    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  goToSlide(index: number) {
    this.currentSlideIndex.set(index);
    this.startAutoPlay();
  }
}
