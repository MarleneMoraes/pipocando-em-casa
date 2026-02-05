import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { TmdbResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
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

  searchMovies(query: string, page: number = 1, language: string = 'pt-BR'): Observable<TmdbResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', language)
      .set('query', query)
      .set('page', page.toString());

    return this.http.get<TmdbResponse>(`${this.apiUrl}/search/movie`, { params });
  }
}
