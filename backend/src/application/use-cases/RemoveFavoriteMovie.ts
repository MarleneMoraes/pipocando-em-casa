import { IMovieRepository } from "../../domain/repositories/IMovieRepository";
import { AppError } from "../../shared/errors/AppError";

export class RemoveFavoriteMovie {
  constructor(private movieRepository: IMovieRepository) {}

  async execute(id: string): Promise<void> {
    const movieExists = await this.movieRepository.findById(id);
    
    if (!movieExists) {
      throw new AppError("Movie not found", 404);
    }

    await this.movieRepository.delete(id);
  }
}