import { create } from "zustand";
import { SerialsSlice } from "@/pages/home/model/slice/SerialsSlice";
import { devtools } from "zustand/middleware";
import { ISerialsSlice } from "@/pages/home/model/types/SliceTypes";

const popularSerialsStore = create(
    devtools<ISerialsSlice>(
        (...b) => ({
            ...SerialsSlice(...b)
        })
    )
)

export { popularSerialsStore }