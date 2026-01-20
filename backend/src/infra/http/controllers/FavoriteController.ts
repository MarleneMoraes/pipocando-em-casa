import { string } from "./../../../../node_modules/effect/src/Config";
import { Request, Response, NextFunction } from "express";
import { AddFavoriteMovie } from "../../../application/use-cases/AddFavoriteMovie";
import { ListFavoriteMovies } from "../../../application/use-cases/ListFavoriteMovies";
import { RemoveFavoriteMovie } from "../../../application/use-cases/RemoveFavoriteMovie";
import { PrismaMovieRepository } from "../../repositories/PrismaMovieRepository";
import { sql as sqltag } from "@prisma/client-runtime-utils";

export class FavoriteController {
  private movieRepository = new PrismaMovieRepository();

  async add(req: Request, res: Response, next: NextFunction) {
    try {
      const addFavorite = new AddFavoriteMovie(this.movieRepository);
      await addFavorite.execute(req.body);
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const listFavorites = new ListFavoriteMovies(this.movieRepository);
      const movies = await listFavorites.execute();

      const formattedMovies = movies.map((movie) => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        rating: movie.rating,
        posterPath: movie.posterPath,
        releaseDate: movie.releaseDate,
      }));

      return res.json(formattedMovies);
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id as string;
      const removeFavorite = new RemoveFavoriteMovie(this.movieRepository);

      await removeFavorite.execute(id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
