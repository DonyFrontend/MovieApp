import { Dispatch, SetStateAction } from "react"

interface IAvatar {
  gravatar: {
    hash: string,
  },
  tmdb: {
    avatar_path: string | null
  }
}

export interface IAccount {
  avatar: IAvatar,
  id: number,
  iso_639_1: string,
  iso_3166_1: string,
  name: string | "",
  include_adult: boolean,
  username: string
}

export interface IAccountSlice {
  account: IAccount,
  setAccount: (session_id: string, loading: Dispatch<SetStateAction<boolean>>) => void;
}