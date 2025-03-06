import { StateCreator } from "zustand";
import { IHomeSLice } from "../types/SliceTypes";
import instance from "@/shared/api/tmdb/instance";

export const HomeSlice: StateCreator<IHomeSLice> = (set) => ({
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
                language: 'ru-RU'
            }
        })
            .then(data => {
                set(() => ({ data: data.data }))
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false))
    },
})