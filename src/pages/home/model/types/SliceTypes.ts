import { Dispatch, SetStateAction } from "react";

interface IPopular_movie  {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

interface IPopular_serial {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string | "",
    popularity: number,
    poster_path: number,
    first_air_date: string,
    name: string,
    vote_average: number,
    vote_count: number
}

interface IHomePopularMovies {
    page: number,
    results: IPopular_movie[],
    total_pages: number,
    total_results: number,
}

interface IHomePopularSerials {
    page: number,
    results: IPopular_serial[],
    total_pages: number,
    total_results: number,
}

export interface IHomeSLice {
    data: IHomePopularMovies,
    setData: (value1: number, value2: Dispatch<SetStateAction<boolean>>) => void,
}

export interface IPopularSerialsSlice {
    data: IHomePopularSerials,
    setData: (value1: number, value2: Dispatch<SetStateAction<boolean>>) => void,
}