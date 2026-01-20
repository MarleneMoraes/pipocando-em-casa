import { Router } from 'express';
import { MovieController } from '../controllers/MovieController';

const movieRoutes = Router();
const movieController = new MovieController();

movieRoutes.get('/now-playing', (req, res, next) => movieController.getNowPlaying(req, res,next));

export { movieRoutes };