import { StateCreator } from "zustand";
import { IPopularSerialsSlice } from "../types/SliceTypes";
import instance from "@/shared/api/tmdb/instance";
import language from "@/shared/api/language";

export const PopularSerialsSlice: StateCreator<IPopularSerialsSlice> = (set) => ({
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
    }
})