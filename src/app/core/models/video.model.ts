export interface VideoDto {
  id: string;
  key: string;
  site: string;
  type: string;
  name: string;
}

export interface VideoResponse {
  id: number;
  results: VideoDto[];
}
