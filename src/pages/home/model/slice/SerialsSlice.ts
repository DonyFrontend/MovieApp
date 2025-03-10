import { StateCreator } from "zustand";
import { ISerialsSlice } from "../types/SliceTypes";
import instance from "@/shared/api/tmdb/instance";
import language from "@/shared/api/language";

export const SerialsSlice: StateCreator<ISerialsSlice> = (set) => ({
    data: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
    },
    setData: (page, setLoading) => {
        setLoading(true);
        instance.get('/tv/popular', {
            params: {
                language,
                page
            }
        })
        .then(res => set(() => ({data: res.data})))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    },
    on_the_air: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
    },
    setOn_the_air(page, loading) {
        loading(true);
        instance.get("/tv/on_the_air", {
            params: {
                page,
                language
            }
        })
        .then(data => set(() => ({on_the_air: data.data})))
        .catch(err => console.error(err))
        .finally(() => loading(false))
    },
    airing_today: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
    },
    setAiring_today(page, loading) {
        loading(true);
        instance.get("/tv/airing_today", {
            params: {
                page,
                language
            }
        })
        .then(data => set(() => ({airing_today: data.data})))
        .catch(err => console.error(err))
        .finally(() => loading(false))
    },
})