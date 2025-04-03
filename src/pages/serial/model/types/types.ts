import { IGenres } from "@/pages/film/model/types/types";
import { Dispatch, SetStateAction } from "react";

interface ICreated_by {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string | null;
}

interface INetwork {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface IProduction_companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface IProduction_countries {
  iso_3166_1: string;
  name: string;
}

interface ISeason {
  air_date: string;
  episode_count: string;
  id: number;
  name: string;
  overview: string | "";
  poster_path: string;
  season_number: number;
  vote_average: number;
}

interface ISpokenLanguages {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface ISerial {
  adult: boolean;
  backdrop_path: string;
  created_by: ICreated_by[];
  episode_run_time: number[];
  first_air_date: string;
  genres: IGenres[];
  homepage: string | "";
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string | "";
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string | "";
    runtime: string;
    season_number: number;
    show_id: number;
    still_path: null | string;
  };
  name: string;
  next_episode_to_air: string | null;
  networks: INetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string | "";
  popularity: number;
  poster_path: string;
  production_companies: IProduction_companies[];
  production_countries: IProduction_countries[];
  seasons: ISeason[];
  spoken_languages: ISpokenLanguages[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface ISerialSlice {
  data: ISerial;
  setData: (
    id: string | undefined,
    loading: Dispatch<SetStateAction<boolean>>
  ) => void;
  isFav: boolean;
  setFav: (account_id: number, session_id: string, tv_id: number) => void;
  getFav: (
    account_id: number,
    loading: Dispatch<SetStateAction<boolean>>,
    tv_id: number | undefined
  ) => void;
}
