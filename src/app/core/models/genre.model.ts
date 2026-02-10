export interface GenreDto {
  id: number;
  name: string;
}

export interface GenreResponse {
  genres: GenreDto[];
}
