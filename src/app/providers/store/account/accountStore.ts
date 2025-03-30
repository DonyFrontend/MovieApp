import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { IAccountSlice } from "@/features/account/model/types/types";
import { AccountSlice } from "@/features/account/model/slice/slice";

export const useAccountStore = create(
  devtools<IAccountSlice>((...b) => ({
    ...AccountSlice(...b),
  }))
);
