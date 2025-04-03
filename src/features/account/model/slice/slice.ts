import { StateCreator } from "zustand";
import { IAccountSlice } from "../types/types";
import instance from "@/shared/api/tmdb/instance";
import api_key from "@/shared/api/api_key";
import language from "@/shared/api/language";

export const AccountSlice: StateCreator<IAccountSlice> = (set) => ({
  account: {
    avatar: {
      gravatar: {
        hash: "",
      },
      tmdb: {
        avatar_path: null,
      },
    },
    id: 0,
    include_adult: false,
    iso_3166_1: "",
    iso_639_1: "",
    name: "",
    username: "",
  },
  setAccount(session_id, loading) {
    loading(true);
    instance
      .get("/account", {
        params: {
          api_key,
          session_id,
        },
      })
      .then((data) => set(() => ({ account: data.data })))
      .catch((err) => console.log(err))
      .finally(() => loading(false));
  },
  fav_tv: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  fav_movies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  async getFavMovies(account_id, loading) {
    loading(true);
    try {
      const data = await instance.get(`/account/${account_id}/favorite/movies`, {
        params: {
          language
        }
      })
      set(() => ({fav_movies: data.data}));
    } catch (error) {
      console.log(error);
    } finally {
      loading(false);
    }
  },
  async getFavTV(account_id, loading) {
    loading(true);
    try {
      const data = await instance.get(`/account/${account_id}/favorite/tv`, {
        params: {
          language
        }
      })
      set(() => ({fav_tv: data.data}));
    } catch (error) {
      console.log(error);
    } finally {
      loading(false);
    }
  },
});
