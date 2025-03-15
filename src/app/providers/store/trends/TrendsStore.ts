import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { ITrendsSlice } from "@/pages/trends/model/types/types";
import { TrendsSlice } from "@/pages/trends/model/slice/slice";

const useTrendsStore = create(
    devtools<ITrendsSlice>(
        (...b) => ({
            ...TrendsSlice(...b)
        })
    )
)

export { useTrendsStore }