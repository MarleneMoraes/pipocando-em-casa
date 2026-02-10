import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MovieDto } from '../../core/models/movie.model';
import { TmdbService } from '../../core/services/tmdb';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private tmdbService = inject(TmdbService);
  private cdr = inject(ChangeDetectorRef);

  popularMovies: MovieDto[] = [];
  currentSlideIndex = 0;

  private autoPlayTimer: any;

  ngOnInit(): void {
    this.tmdbService.getPopularMovies(1, 'en-US').subscribe({
      next: (response) => {
        this.popularMovies = response.results.slice(0, 5);

        this.cdr.detectChanges();

        this.startAutoPlay();
      },
      error: (error) => console.error('Erro ao buscar filmes:', error),
    });
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  nextSlide() {
    if (this.popularMovies.length > 0) {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.popularMovies.length;

      this.cdr.detectChanges();
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
    this.currentSlideIndex = index;
    this.cdr.detectChanges();
    this.startAutoPlay();
  }
}
