import { HomeSlice } from "@/pages/home/model/slice/HomeSlice";
import { IHomeSLice } from "@/pages/home/model/types/SliceTypes";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const mainStore = create(
    devtools<IHomeSLice>(
        (...b) => ({
            ...HomeSlice(...b)
        })
    )
);

export { mainStore }