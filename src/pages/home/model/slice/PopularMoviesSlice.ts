import { StateCreator } from "zustand";
import { IHomeSLice } from "../types/SliceTypes";
import instance from "@/shared/api/tmdb/instance";
import language from "@/shared/api/language";

export const PopularMoviesSliceSlice: StateCreator<IHomeSLice> = (set) => ({
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
})