import { PopularMoviesSliceSlice } from "@/pages/home/model/slice/PopularMoviesSlice";
import { IHomeSLice } from "@/pages/home/model/types/SliceTypes";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const mainStore = create(
    devtools<IHomeSLice>(
        (...b) => ({
            ...PopularMoviesSliceSlice(...b)
        })
    )
);

export { mainStore }