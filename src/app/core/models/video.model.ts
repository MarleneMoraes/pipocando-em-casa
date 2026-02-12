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

export interface VideoDisplay {
  id: string;
  title: string;
  videoTitle: string;
  credits: string;
  description: string;
  type: 'Making Of' | 'Interview';
}
