import Film from "@/pages/film/ui/FIlm";
import Home from "@/pages/home/ui/Home";
import Serial from "@/pages/serial/ui/Serial";
import { ReactNode } from "react";

export enum RouterEnum {
    HOME = '/',
    FILM = '/film/:id',
    SERIAL = '/serial/:id'
}

export const RouterPath =  {
    HOME: () => '/main/*',
    SEARCH: () => '/search',
    TOP_RATED: () => '/top_rated',
    NOW_IN_CINEMA: () => '/now_in_cinema',
    PREMIERS: () => '/premiers',
    SETTINGS: () => '/settings',
    TRENDS: () => '/trends',
    FAVOURITES: () => '/favourites',
    FILM: () => '/film/:id',
    SERIAL: () => '/serial/:id'
}

export interface RouterType {
    path: string,
    element: ReactNode,
}

export const RoutesObject: Record<RouterEnum, RouterType> = {
    [RouterEnum.HOME]: {
        element: <Home />,
        path: RouterPath.HOME(),
    },
    [RouterEnum.FILM]: {
        element: <Film/>,
        path: RouterPath.FILM()
    },
    [RouterEnum.SERIAL]: {
        element: <Serial/>,
        path: RouterPath.SERIAL()
    },
}