import { z } from 'zod';

export const addFavoriteSchema = z.object({
  id: z.string().or(z.number()).transform(val => String(val)),
  title: z.string().min(1, "Title is required"),
  overview: z.string(),
  rating: z.number().min(0).max(10),
  posterPath: z.string().nullable().optional(),
  releaseDate: z.string().or(z.date()).transform(val => new Date(val))
});