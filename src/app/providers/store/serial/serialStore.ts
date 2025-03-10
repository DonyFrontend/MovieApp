import { SerialSlice } from "@/pages/serial/model/slice/slice";
import { ISerialSlice } from "@/pages/serial/model/types/types";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const SerialStore = create(
    devtools<ISerialSlice>(
        (...b) => ({
            ...SerialSlice(...b)
        })
    )
)

export { SerialStore }