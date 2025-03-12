import { SearchSlice } from "@/pages/search/model/slice/slice";
import { ISearchSlice } from "@/pages/search/model/types/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useSearchStore = create(
    devtools<ISearchSlice>(
        (...b) => ({ ...SearchSlice(...b) })
    )
)

export { useSearchStore }