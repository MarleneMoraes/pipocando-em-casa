import { Movie } from "../../domain/entities/Movie";
import { IMovieRepository } from "../../domain/repositories/IMovieRepository";

export class ListFavoriteMovies {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(): Promise<Movie[]> {
    return await this.movieRepository.findAll();
  }
}