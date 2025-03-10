import { Dispatch, SetStateAction } from "react";

interface IPopular_movie {
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

export interface IHomePopularMovies {
    page: number,
    results: IPopular_movie[],
    total_pages: number,
    total_results: number,
}

export interface IHomePopularSerials {
    page: number,
    results: IPopular_serial[],
    total_pages: number,
    total_results: number,
}

interface IUpcomingMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

interface IDates {
    maximum: string,
    minimum: string
}

export interface IUpcomingMovies {
    dates: IDates,
    page: number,
    results: IUpcomingMovie[],
    total_pages: number,
    total_results: number
}

interface INow_playingMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

interface INow_playingDates {
    maximum: string,
    minimum: string
}

export interface INow_playingMovies {
    dates: INow_playingDates,
    page: number,
    results: INow_playingMovie[],
    total_pages: number,
    total_results: number
}

export interface IHomeSLice {
    data: IHomePopularMovies,
    setData: (value1: number, value2: Dispatch<SetStateAction<boolean>>) => void,
    upcoming: IUpcomingMovies,
    setUpcoming: (value1: number, value2: Dispatch<SetStateAction<boolean>>) => void,
    now_playing: INow_playingMovies,
    setNow_playing: (value1: number, value2: Dispatch<SetStateAction<boolean>>) => void,
}

interface IOn_the_air_serial {
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

export interface IOn_the_air_serials {
    page: number,
    results: IOn_the_air_serial[],
    total_pages: number,
    total_results: number
}

interface IAiring_today_serial {
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

export interface IAiring_today_serials {
    page: number,
    results: IAiring_today_serial[],
    total_pages: number,
    total_results: number
}

export interface ISerialsSlice {
    data: IHomePopularSerials,
    setData: (value1: number, value2: Dispatch<SetStateAction<boolean>>) => void,
    on_the_air: IOn_the_air_serials,
    setOn_the_air: (value1: number, value2: Dispatch<SetStateAction<boolean>>) => void,
    airing_today: IAiring_today_serials,
    setAiring_today: (value1: number, value2: Dispatch<SetStateAction<boolean>>) => void,
}