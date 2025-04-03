import { Dispatch, SetStateAction } from "react";

interface IAvatar {
  gravatar: {
    hash: string;
  };
  tmdb: {
    avatar_path: string | null;
  };
}

interface ITVResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

export interface IFavTV {
  page: number;
  results: ITVResult[];
  total_pages: number;
  total_results: number;
}

interface IMovieResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IFavMovies {
  page: number;
  results: IMovieResult[];
  total_pages: number;
  total_results: number;
}

export interface IAccount {
  avatar: IAvatar;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string | "";
  include_adult: boolean;
  username: string;
}

export interface IAccountSlice {
  account: IAccount;
  setAccount: (
    session_id: string,
    loading: Dispatch<SetStateAction<boolean>>
  ) => void;
  fav_tv: IFavTV;
  fav_movies: IFavMovies;
  getFavTV: (
    account_id: number,
    loading: Dispatch<SetStateAction<boolean>>
  ) => void;
  getFavMovies: (
    account_id: number,
    loading: Dispatch<SetStateAction<boolean>>
  ) => void;
}
