import { Movie } from "../../domain/entities/Movie";
import { MovieGateway } from "../../infra/gateways/MovieGateway";

export class GetNowPlayingMovies {
  constructor(private movieGateway: MovieGateway) {}

  async execute(): Promise<Movie[]> {
    return await this.movieGateway.getNowPlaying();
  }
}