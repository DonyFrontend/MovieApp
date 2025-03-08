import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { IFilmSlice } from "@/pages/film/model/types/types";
import { FilmSlice } from "@/pages/film/model/slice/slice";

const FilmStore = create(
    devtools<IFilmSlice>(
        (...b) => ({
            ...FilmSlice(...b)
        })
    )
)

export { FilmStore }