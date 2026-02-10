export interface MovieDto {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
}

export interface TmdbResponse {
  page: number;
  results: MovieDto[];
  total_pages: number;
  total_results: number;
}
