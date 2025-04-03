import { StateCreator } from "zustand";
import { IFilm, IFilmSlice } from "../types/types";
import instance from "@/shared/api/tmdb/instance";
import language from "@/shared/api/language";

export const FilmSlice: StateCreator<IFilmSlice> = (set) => ({
  data: {
    adult: false,
    backdrop_path: "",
    belongs_to_collection: {
      backdrop_path: "",
      id: 0,
      name: "",
      poster_path: "",
    },
    budget: 0,
    genres: [],
    homepage: "",
    id: 0,
    imdb_id: "",
    origin_country: [],
    original_language: "",
    original_title: "",
    overview: "",
    popularity: "",
    poster_path: "",
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: "",
    runtime: 0,
    spoken_languages: [],
    status: "",
    tagline: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
    title: "",
  },
  setData: (id, loading) => {
    loading(true);
    instance
      .get(`/movie/${id}`, {
        params: {
          language,
        },
      })
      .then((data) => set(() => ({ data: data.data })))
      .catch((err) => console.error(err))
      .finally(() => loading(false));
  },
  videos: {
    id: 0,
    results: [],
  },
  setVideos: (id, loading) => {
    loading(true);
    instance
      .get(`/movie/${id}/videos`, {
        params: {
          language,
        },
      })
      .then((data) => set(() => ({ videos: data.data })))
      .catch((err) => console.error(err))
      .finally(() => loading(false));
  },
  isFav: false,
  async setFav(account_id, session_id, movie_id) {
    set((state) => {
      const newFavState = !state.isFav;
      try {
        instance.post(
          `/account/${account_id}/favorite`,
          {
            media_type: "movie",
            favorite: newFavState,
            media_id: movie_id,
          },
          {
            params: {
              session_id,
            },
          }
        );
        return { isFav: newFavState };
      } catch (error) {
        console.log(error);
        return {}
      }
    });
  },
  async getFav(account_id, loading, movie_id) {
    loading(true);
    try {
      const data = await instance.get(
        `/account/${account_id}/favorite/movies`,
        {
          params: {
            language,
          },
        }
      );
      const movie = data.data.results.find(
        (item: IFilm) => item.id == movie_id
      );
      if (movie !== undefined) {
        set(() => ({ isFav: true }));
      } else set(() => ({ isFav: false }));
    } catch (error) {
      console.log(error);
    } finally {
      loading(false);
    }
  },
});
