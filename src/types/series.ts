export interface Series {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface SeriesDetails extends Omit<Series, "genre_ids"> {
  genres: { id: number; name: string }[];
  number_of_seasons: number;
  number_of_episodes: number;
  tagline: string;
  // add credits/videos here if you extend like MovieDetails
}