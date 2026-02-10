import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MovieDto } from '../../core/models/movie.model';
import { TmdbService } from '../../core/services/tmdb';
import { Releases } from './components/releases/releases';
import { Featured } from './components/featured/featured';
import { MakingOf } from './components/making-of/making-of';
import { VideoDto } from '../../core/models/video.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Releases, Featured, MakingOf],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private tmdbService = inject(TmdbService);

  popularMovies = signal<MovieDto[]>([]);
  topRatedMovies = signal<MovieDto[]>([]);
  makingOfVideos = signal(new Map<number, VideoDto>());

  ngOnInit(): void {
    this.tmdbService.getPopularMovies(1, 'en-US').subscribe({
      next: (response) => {
        this.popularMovies.set(response.results.slice(0, 5));
      },
      error: (error) => console.error('Erro ao buscar filmes:', error),
    });

    this.tmdbService.getTopRatedMovies(1, 'en-US').subscribe({
      next: (response) => {
        const movies = response.results.slice(0, 3);
        this.topRatedMovies.set(movies);

        movies.forEach(movie => {
          this.tmdbService.getMovieVideos(movie.id).subscribe(videoResponse => {


            const video = videoResponse.results.find(v =>
              v.site === 'YouTube' &&
              (v.type === 'Behind the Scenes' || v.type === 'Featurette' || v.type === 'Interview')
            );

            if (video) {
              this.makingOfVideos.update(currentMap => {
                const newMap = new Map(currentMap);
                newMap.set(movie.id, video);
                return newMap;
              });
            }
          });
        });
      },
      error: (error) => console.error('Erro top rated:', error),
    });
  }
}
