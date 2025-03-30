import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { ITop_ratedSlice } from "@/pages/top_rated/model/types/types";
import { Top_ratedSlice } from "@/pages/top_rated/model/slice/slice";

const Top_ratedStore = create(
    devtools<ITop_ratedSlice>(
        (...b) => ({
            ...Top_ratedSlice(...b)
        })
    )
)

export { Top_ratedStore };