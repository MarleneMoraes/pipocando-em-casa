import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { TmdbResponse } from '../models/movie.model';
import { VideoResponse } from '../models/video.model';
import { GenreResponse } from '../models/genre.model';
import { ReviewResponse } from '../models/review.model';

@Injectable({ providedIn: 'root' })
export class TmdbService {
  private http = inject(HttpClient);

  private apiUrl = environment.apiUrl;
  private apiKey = environment.api_key;

  getPopularMovies(page: number = 1, language: string = 'pt-BR'): Observable<TmdbResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', language)
      .set('page', page.toString());

    return this.http.get<TmdbResponse>(`${this.apiUrl}/movie/popular`, { params });
  }

  searchMovies(
    query: string,
    page: number = 1,
    language: string = 'pt-BR',
  ): Observable<TmdbResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', language)
      .set('query', query)
      .set('page', page.toString());

    return this.http.get<TmdbResponse>(`${this.apiUrl}/search/movie`, { params });
  }

  getTopRatedMovies(page: number = 1, language: string = 'pt-BR'): Observable<TmdbResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', language)
      .set('page', page.toString());

    return this.http.get<TmdbResponse>(`${this.apiUrl}/movie/top_rated`, { params });
  }

  getMovieVideos(movieId: number): Observable<VideoResponse> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get<VideoResponse>(`${this.apiUrl}/movie/${movieId}/videos`, { params });
  }

  getGenres(language: string = 'en-US'): Observable<GenreResponse> {
    const params = new HttpParams().set('api_key', this.apiKey).set('language', language);
    return this.http.get<GenreResponse>(`${this.apiUrl}/genre/movie/list`, { params });
  }

  getMoviesByGenre(genreId: string, page: number = 1): Observable<TmdbResponse> {
    let params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', 'en-US')
      .set('page', page.toString())
      .set('sort_by', 'popularity.desc');

    if (genreId) {
      params = params.set('with_genres', genreId);
    }

    return this.http.get<TmdbResponse>(`${this.apiUrl}/discover/movie`, { params });
  }

  getMovieReviews(movieId: number): Observable<ReviewResponse> {
    const params = new HttpParams().set('api_key', this.apiKey).set('language', 'en-US');
    return this.http.get<ReviewResponse>(`${this.apiUrl}/movie/${movieId}/reviews`, { params });
  }
}
