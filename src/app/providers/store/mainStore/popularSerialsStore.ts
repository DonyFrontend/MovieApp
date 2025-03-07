import { create } from "zustand";
import { PopularSerialsSlice } from "@/pages/home/model/slice/PopularSerialsSlice";
import { devtools } from "zustand/middleware";
import { IPopularSerialsSlice } from "@/pages/home/model/types/SliceTypes";

const popularSerialsStore = create(
    devtools<IPopularSerialsSlice>(
        (...b) => ({
            ...PopularSerialsSlice(...b)
        })
    )
)

export { popularSerialsStore }