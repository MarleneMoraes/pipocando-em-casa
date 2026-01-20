import { Movie } from "../entities/Movie";

export interface IMovieRepository {
  save(movie: Movie): Promise<void>;
  findAll(): Promise<Movie[]>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Movie | null>;
}