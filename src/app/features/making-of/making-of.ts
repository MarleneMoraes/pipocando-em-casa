import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { forkJoin, map } from 'rxjs';
import { TmdbService } from '../../core/services/tmdb';
import { VideoDisplay } from '../../core/models/video.model';
import { BaseComponent } from '../../shared/classes/base-component/base-component';

@Component({
  selector: 'app-making-of',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './making-of.html',
  styleUrl: './making-of.scss',
})
export class MakingOf extends BaseComponent implements OnInit {
  private tmdbService = inject(TmdbService);
  private sanitizer = inject(DomSanitizer);

  videoList = signal<VideoDisplay[]>([]);
  loading = signal(true);

  makingOfItems = computed(() => this.videoList().filter(v => v.type === 'Making Of'));
  interviewItems = computed(() => this.videoList().filter(v => v.type === 'Interview'));

  ngOnInit() {
    this.loadContent();
  }

  loadContent() {
    this.tmdbService.getPopularMovies().subscribe(res => {
      const movies = res.results.slice(0, 6);

      const requests = movies.map(movie =>
        forkJoin({
          videos: this.tmdbService.getMovieVideos(movie.id),
          credits: this.tmdbService.getMovieCredits(movie.id)
        }).pipe(
          map(data => ({
            movie: movie,
            videos: data.videos.results,
            crew: data.credits.crew
          }))
        )
      );

      forkJoin(requests).subscribe(results => {
        const displayData: VideoDisplay[] = [];

        results.forEach(item => {
          const director = item.crew.find((c: any) => c.job === 'Director')?.name || 'Unknown';
          const writers = item.crew
            .filter((c: any) => c.department === 'Writing')
            .slice(0, 2)
            .map((c: any) => c.name)
            .join(', ');

          const creditsText = `Direction: ${director} ${writers ? '| Screenplay: ' + writers : ''}`;

          const makingOf = item.videos.find((v: any) => v.type === 'Behind the Scenes' && v.site === 'YouTube');
          const interview = item.videos.find((v: any) => (v.type === 'Interview' || v.type === 'Featurette') && v.site === 'YouTube');

          if (makingOf) {
            displayData.push({
              id: makingOf.key,
              title: item.movie.title,
              videoTitle: makingOf.name,
              credits: creditsText,
              description: `Exclusive behind the scenes look at the making of "${item.movie.title}". Watch the best moments from the set.`,
              type: 'Making Of'
            });
          } else if (interview) {
            displayData.push({
              id: interview.key,
              title: item.movie.title,
              videoTitle: interview.name,
              credits: creditsText,
              description: `Special interview with the cast and crew of "${item.movie.title}". Details about the production and characters.`,
              type: 'Interview'
            });
          }
        });

        this.videoList.set(displayData);
        this.loading.set(false);
      });
    });
  }

  getSafeUrl(key: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`);
  }
}
