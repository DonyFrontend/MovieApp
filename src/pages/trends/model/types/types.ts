import { Dispatch, SetStateAction } from "react"

interface ITrend {
    backdrop_path: string,
    id:number,
    title: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    adult: boolean,
    original_language: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface ITrends {
    page: number,
    results: ITrend[],
    total_pages: number,
    total_results: number
}

export interface ITrendsSlice {
    week: ITrends,
    day: ITrends,
    setWeek: (page: number, loading: Dispatch<SetStateAction<boolean>>) => void,
    setDay: (page: number, loading: Dispatch<SetStateAction<boolean>>) => void
}