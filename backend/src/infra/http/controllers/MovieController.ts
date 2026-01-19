import { Request, Response } from 'express';
import { MovieGateway } from '../../gateways/MovieGateway';

export class MovieController {
  private movieGateway = new MovieGateway();

  async getNowPlaying(req: Request, res: Response) {
    try {
      const movies = await this.movieGateway.getNowPlaying();
      return res.json(movies);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }
}