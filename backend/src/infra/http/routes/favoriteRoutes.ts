import { Router } from 'express';
import { FavoriteController } from '../controllers/FavoriteController';

const favoriteRoutes = Router();
const favoriteController = new FavoriteController();

favoriteRoutes.get('/', (req, res, next) => favoriteController.list(req, res, next));

favoriteRoutes.post('/', (req, res, next) => favoriteController.add(req, res, next));

favoriteRoutes.delete('/:id', (req, res, next) => favoriteController.remove(req, res, next));

export { favoriteRoutes };