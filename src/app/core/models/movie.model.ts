export interface MovieDto {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
  genre_ids: number[];
}

export interface TmdbResponse {
  page: number;
  results: MovieDto[];
  total_pages: number;
  total_results: number;
}

export interface MovieTechSheet {
  movie: MovieDto;
  posterUrl: string;
  year: string;
  director: string;
  writer: string;
  genreNames: string;
  popcornRating: number;
}
