import { Movie } from "../../domain/entities/Movie";

export class MovieMapper {
  static toDomain(raw: any): Movie {
    return new Movie({
      id: String(raw.id),
      title: raw.title || raw.original_title,
      overview: raw.overview,
      rating: raw.vote_average,
      posterPath: `https://image.tmdb.org/t/p/w500${raw.poster_path}`,
      releaseDate: new Date(raw.release_date),
    });
  }
}