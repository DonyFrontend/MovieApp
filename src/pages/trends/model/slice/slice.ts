import { StateCreator } from "zustand";
import { ITrendsSlice } from "../types/types";
import instance from "@/shared/api/tmdb/instance";
import language from "@/shared/api/language";

export const TrendsSlice: StateCreator<ITrendsSlice> = (set) => ({
    day: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
    },
    setDay(page, loading) {
        loading(true);
        instance.get("/trending/all/day", {
            params: {
                language,
                page
            }
        })
        .then(data => set(() => ({day: data.data})))
        .catch(err => console.error(err))
        .finally(() => loading(false));
    },
    week: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0,
    },
    setWeek(page, loading) {
        loading(true);
        instance.get("/trending/all/week", {
            params: {
                language,
                page
            }
        })
        .then(data => set(() => ({week: data.data})))
        .catch(err => console.error(err))
        .finally(() => loading(false));
    },
})