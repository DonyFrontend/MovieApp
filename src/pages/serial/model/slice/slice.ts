import { StateCreator } from "zustand";
import { ISerialSlice } from "../types/types";
import instance from "@/shared/api/tmdb/instance";
import language from "@/shared/api/language";

export const SerialSlice: StateCreator<ISerialSlice> = (set) => ({
    data: {
        adult: false,
        backdrop_path: "",
        genres: [],
        homepage: "",
        id: 0,
        origin_country: [],
        original_language: "",
        overview: "",
        poster_path: "",
        production_companies: [],
        production_countries: [],
        spoken_languages: [],
        status: "",
        tagline: "",
        vote_average: 0,
        vote_count: 0,
        created_by: [],
        episode_run_time: [],
        first_air_date: "",
        in_production: false,
        languages: [],
        last_air_date: "",
        last_episode_to_air: {
            air_date: "",
            episode_number: 0,
            episode_type: "",
            id: 0,
            name: "",
            overview: "",
            production_code: "",
            runtime: "",
            season_number: 0,
            show_id: 0,
            still_path: null,
            vote_average: 0,
            vote_count: 0            
        },
        name: "",
        networks: [],
        next_episode_to_air: null,
        number_of_episodes: 0,
        number_of_seasons: 0,
        original_name: "",
        popularity: 0,
        seasons: [],
        type: ""
    },
    setData: (id, loading) => {
        loading(true)
        instance.get(`/tv/${id}`, {
            params: {
                language
            }
        })
        .then(data => set(() => ({data: data.data})))
        .catch(err => console.error(err))
        .finally(() => loading(false));
    },
})