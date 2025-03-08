import { Dispatch, SetStateAction } from "react"

interface IBelongs_to_collection {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
}

interface IGenres {
    id: number,
    name: string
}

interface IProduction_companies {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}

interface IProduction_countries {
    iso_3166_1: string,
    name: string
}

interface ISpoken_languages {
    english_name: string,
    iso_639_1: string,
    name: string
}

interface IFilm {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: IBelongs_to_collection,
    budget: number,
    genres: IGenres[],
    homepage: string | "",
    id: number,
    imdb_id: string,
    origin_country: string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    production_companies: IProduction_companies[],
    production_countries: IProduction_countries[],
    release_date: string,
    revenue: string,
    runtime: number,
    spoken_languages: ISpoken_languages[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}


interface IFilmVideosResult {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string
}

export interface IFilmVideos {
    id: number,
    results: IFilmVideosResult[]
}

export interface IFilmSlice {
    data: IFilm,
    videos: IFilmVideos,
    setVideos: (id: string | undefined, loading: Dispatch<SetStateAction<boolean>>) => void
    setData: (id: string | undefined, loading: Dispatch<SetStateAction<boolean>>) => void,
}