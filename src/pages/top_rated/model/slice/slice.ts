import { StateCreator } from "zustand";
import { ITop_ratedSlice } from "../types/types";
import instance from "@/shared/api/tmdb/instance";
import language from "@/shared/api/language";

export const Top_ratedSlice: StateCreator<ITop_ratedSlice> = (set) => ({
    movie: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
    },
    tv: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
    },
    setMovie(page, loading) {
        loading(true);
        instance.get('/movie/top_rated', {
            params: {
                page,
                language
            }
        })
        .then(data => set(() => ({movie: data.data})))
        .catch(err => console.error(err))
        .finally(() => loading(false));
    },
    setTV(page, loading) {
        loading(true);
        instance.get('/tv/top_rated', {
            params: {
                page,
                language
            }
        })
        .then(data => set(() => ({tv: data.data})))
        .catch(err => console.error(err))
        .finally(() => loading(false));
    },
})