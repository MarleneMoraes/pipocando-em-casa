export interface ReviewDto {
  author: string;
  content: string;
  created_at: string;
  author_details: {
    rating: number;
    avatar_path: string;
  };
}

export interface ReviewResponse {
  results: ReviewDto[];
}

export interface ReviewDisplay {
  movieTitle: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
  rating: number;
  stars: number[];
  emptyStars: number[];
}

export interface ReviewItem {
  review: ReviewDto;
  movieTitle: string;
}

export interface ReviewPageItem {
  review: ReviewDto;
  movieTitle: string;
}
