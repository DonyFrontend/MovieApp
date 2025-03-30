import { StateCreator } from "zustand";
import { IAccountSlice } from "../types/types";
import instance from "@/shared/api/tmdb/instance";
import api_key from "@/shared/api/api_key";

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
      .catch(err => console.log(err))
      .finally(() => loading(false));
  },
});
