import { StateCreator } from "zustand";
import { IHomeSLice } from "../types/SliceTypes";
import instance from "@/shared/api/tmdb/instance";
import language from "@/shared/api/language";

export const MoviesSliceSlice: StateCreator<IHomeSLice> = (set) => ({
    data: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    setData(page, setLoading) {
        setLoading(true);
        instance.get('/movie/popular', {
            params: {
                page,
                language
            }
        })
            .then(data => {
                set(() => ({ data: data.data }))
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    },
    upcoming: {
        dates: {
            maximum: "",
            minimum: "",
        },
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    setUpcoming(page, loading) {
        loading(true);
        instance.get("/movie/upcoming", {
            params: {
                language,
                page
            }
        })
            .then(data => set(() => ({ upcoming: data.data })))
            .catch(err => console.error(err))
            .finally(() => loading(false))
    },
    now_playing: {
        dates: {
            maximum: "",
            minimum: "",
        },
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    setNow_playing(page, loading) {
        loading(true);
        instance.get('/movie/now_playing', {
            params: {
                language,
                page
            }
        })
        .then(data => set(() => ({now_playing: data.data})))
        .catch(err => console.error(err))
        .finally(() => loading(false));
    },
})