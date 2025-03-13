import { StateCreator } from "zustand";
import { ISearchSlice } from "../types/types";
import instance from "@/shared/api/tmdb/instance";
import language from "@/shared/api/language";

export const SearchSlice: StateCreator<ISearchSlice> = (set) => ({
    data: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    setData(page, loading, query, type = "multi") {
        loading(true);
        instance.get(`/search/${type}`, {
            params: {
                page,
                language,
                query
            }
        })
            .then(data => {
                set(() => ({ data: data.data }))
                console.log(data.data);
            })
            .catch(err => console.error(err))
            .finally(() => loading(false));
    },
    other_data: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    setOtherData(page, loading, query, type = "multi") {
        loading(true);
        instance.get(`/search/${type}`, {
            params: {
                page,
                language,
                query
            }
        })
            .then(data => {
                set(() => ({ other_data: data.data }))
                console.log(data.data);
            })
            .catch(err => console.error(err))
            .finally(() => loading(false));
    },
})