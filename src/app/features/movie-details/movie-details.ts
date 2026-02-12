import { CommonModule, DatePipe, DecimalPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../../core/services/tmdb';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, DatePipe, DecimalPipe, MatDialogModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.scss',
})
export class MovieDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private tmdbService = inject(TmdbService);

  movie = signal<any>(null);
  loading = signal(true);
  backdropUrl = signal('');

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadMovie(id);
      }
    });
  }

  loadMovie(id: string) {
    this.loading.set(true);
    this.tmdbService.getMovieDetails(id).subscribe({
      next: (data) => {
        this.movie.set(data);
        if (data.backdrop_path) {
          this.backdropUrl.set(`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Erro ao carregar filme', err);
        this.loading.set(false);
      }
    });
  }
}
