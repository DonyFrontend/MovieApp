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

interface IHomeResults {
    page: number,
    results: IPopular_movie[],
    total_pages: number,
    total_results: number,
}

export interface IHomeSLice {
    data: IHomeResults,
    setData: (value1: number, value2: Dispatch<SetStateAction<boolean>>) => void
}