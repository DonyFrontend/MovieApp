import { Dispatch, SetStateAction } from "react"

interface ISearchResult {
    backdrop_path: string,
    id: number,
    name?: string,
    original_name?: string,
    original_title?: string,
    title?: string,
    overview: string,
    poster_path: string,
    media_type?: string,
    adult: boolean,
    original_language: string,
    genre_ids: number[],
    popularity: number,
    first_air_date: string,
    vote_average: number,
    vote_count: number,
    origin_country: string[],
    release_date?: string,
}

export interface ISearchData {
    page: number,
    results: ISearchResult[],
    total_pages: number,
    total_results: number
}

export interface ISearchSlice {
    data: ISearchData,
    setData: (page: number, loading: Dispatch<SetStateAction<boolean>>, query: string, type?: string) => void
    setOtherData: (page: number, loading: Dispatch<SetStateAction<boolean>>, query: string, type?: string) => void
    other_data: ISearchData,
}

export interface IBestResult {
    data: ISearchResult
}