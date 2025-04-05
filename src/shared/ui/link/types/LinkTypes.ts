import { Dispatch, SetStateAction } from "react";

export interface ICustomLink {
    to: string,
    activeImage?: string,
    image: string,
    text: string,
    state?: Dispatch<SetStateAction<boolean>>
}