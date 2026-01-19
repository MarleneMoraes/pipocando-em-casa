import { NextFunction, Request, Response } from 'express';
import { MovieGateway } from '../../gateways/MovieGateway';
import { GetNowPlayingMovies } from '../../../application/use-cases/GetNowPlayingMovies';

export class MovieController {
  async getNowPlaying(req: Request, res: Response, next: NextFunction) {
    const movieGateway = new MovieGateway();
    const getNowPlayingMovies = new GetNowPlayingMovies(movieGateway);

    const movies = await getNowPlayingMovies.execute().catch(next); 
    
    if (movies) return res.json(movies);
  }
}