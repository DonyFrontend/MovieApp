import { MoviesSliceSlice } from "@/pages/home/model/slice/MoviesSlice";
import { IHomeSLice } from "@/pages/home/model/types/SliceTypes";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const mainStore = create(
    devtools<IHomeSLice>(
        (...b) => ({
            ...MoviesSliceSlice(...b)
        })
    )
);

export { mainStore }