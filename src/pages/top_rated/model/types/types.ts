import { Dispatch, SetStateAction } from "react"

interface IResultTV {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    first_air_date: string,
    name: string,
    vote_average: number,
    vote_count: number
}

interface IResultMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    origin_title: string,
    original_language: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface ITop_ratedTV {
    page: number,
    results: IResultTV[],
    total_pages: number,
    total_results: number
}

export interface ITop_ratedMovie {
    page: number,
    results: IResultMovie[],
    total_pages: number,
    total_results: number
}

export interface ITop_ratedSlice {
    tv: ITop_ratedTV,
    setTV: (page: number, loading: Dispatch<SetStateAction<boolean>>) => void,
    movie: ITop_ratedMovie,
    setMovie: (page: number, loading: Dispatch<SetStateAction<boolean>>) => void,
}