import { Movie } from "../../domain/entities/Movie";
import { IMovieRepository } from "../../domain/repositories/IMovieRepository";
import { prisma } from "../database/prisma";

export class PrismaMovieRepository implements IMovieRepository {
  async save(movie: Movie): Promise<void> {
    await prisma.movie.upsert({
      where: { id: movie.id },
      update: {
        title: movie.title,
        overview: movie.overview,
        rating: movie.rating,
        posterPath: movie.posterPath,
        releaseDate: movie.releaseDate,
      },
      create: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        rating: movie.rating,
        posterPath: movie.posterPath,
        releaseDate: movie.releaseDate,
      },
    });
  }

  async findAll(): Promise<Movie[]> {
    const moviesFromDb = await prisma.movie.findMany();

    return moviesFromDb.map(
      (dbMovie) =>
        new Movie({
          id: dbMovie.id,
          title: dbMovie.title,
          overview: dbMovie.overview,
          rating: dbMovie.rating,
          posterPath: dbMovie.posterPath,
          releaseDate: dbMovie.releaseDate,
        }),
    );
  }

  async delete(id: string): Promise<void> {
    await prisma.movie.delete({
      where: { id },
    });
  }

  async findById(id: string): Promise<Movie | null> {
    const movie = await prisma.movie.findUnique({
      where: { id },
    });
    return movie as Movie | null;
  }
}
