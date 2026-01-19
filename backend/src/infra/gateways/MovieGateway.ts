import axios from 'axios';
import { Movie } from '../../domain/entities/Movie';
import { MovieMapper } from '../../shared/mappers/MovieMapper';

export class MovieGateway {
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly apiKey = process.env.TMDB_API_KEY;

  async getTrending(): Promise<Movie[]> {
    const response = await axios.get(`${this.baseUrl}/trending/movie/week?api_key=${this.apiKey}`);
    
    return response.data.results.map((item: any) => MovieMapper.toDomain(item));
  }
}