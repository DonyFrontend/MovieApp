import Film from "@/pages/film/ui/FIlm";
import Home from "@/pages/home/ui/Home";
import Search from "@/pages/search/ui/Search";
import Serial from "@/pages/serial/ui/Serial";
import Trends from "@/pages/trends/ui/Trends";
import { ReactNode } from "react";

export enum RouterEnum {
    HOME = '/',
    FILM = '/movie/:id',
    SERIAL = '/tv/:id',
    SEARCH = '/search',
    TRENDS = '/trends'
}

export const RouterPath = {
    HOME: () => '/main/*',
    SEARCH: () => '/search',
    TOP_RATED: () => '/top_rated',
    SETTINGS: () => '/settings',
    TRENDS: () => '/trends',
    FAVOURITES: () => '/favourites',
    FILM: () => '/movie/:id',
    SERIAL: () => '/tv/:id',
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
        element: <Film />,
        path: RouterPath.FILM()
    },
    [RouterEnum.SERIAL]: {
        element: <Serial />,
        path: RouterPath.SERIAL()
    },
    [RouterEnum.SEARCH]: {
        element: <Search />,
        path: RouterPath.SEARCH()
    },
    [RouterEnum.TRENDS]: {
        element: <Trends/>,
        path: RouterPath.TRENDS()
    },
}