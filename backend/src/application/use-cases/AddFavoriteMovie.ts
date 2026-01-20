import { Movie } from "../../domain/entities/Movie";
import { IMovieRepository } from "../../domain/repositories/IMovieRepository";

export class AddFavoriteMovie {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(movieData: any): Promise<void> {
    const movie = new Movie({
      id: String(movieData.id),
      title: movieData.title,
      overview: movieData.overview,
      rating: movieData.vote_average || movieData.rating,
      posterPath: movieData.poster_path || movieData.posterPath,
      releaseDate: new Date(movieData.release_date || movieData.releaseDate),
    });

    await this.movieRepository.save(movie);
  }
}