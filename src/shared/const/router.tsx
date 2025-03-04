import Home from "@/pages/home/ui/Home";
import { ReactNode } from "react";

export enum RouterEnum {
    HOME = '/'
}

export const RouterPath =  {
    HOME: () => '/',
    SEARCH: () => '/search',
    TOP_RATED: () => '/top_rated',
    NOW_IN_CINEMA: () => '/now_in_cinema',
    PREMIERS: () => '/premiers',
    SETTINGS: () => '/settings',
    TRENDS: () => '/trends',
    FAVOURITES: () => '/favourites'
}

export interface RouterType {
    path: string,
    element: ReactNode,
}

export const RoutesObject: Record<RouterEnum, RouterType> = {
    [RouterEnum.HOME]: {
        element: <Home />,
        path: RouterPath.HOME(),
    }
}