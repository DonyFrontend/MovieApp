import Account from "@/pages/account/ui/Account";
import Film from "@/pages/film/ui/FIlm";
import Home from "@/pages/home/ui/Home";
import Search from "@/pages/search/ui/Search";
import Serial from "@/pages/serial/ui/Serial";
import Top_rated from "@/pages/top_rated/ui/Top_rated";
import Trends from "@/pages/trends/ui/Trends";
import { ReactNode } from "react";

export enum RouterEnum {
    HOME = '/',
    FILM = '/movie/:id',
    SERIAL = '/tv/:id',
    SEARCH = '/search',
    TRENDS = '/trends',
    TOP_RATED = '/top_rated',
    ACCOUNT = '/account'
}

export const RouterPath = {
    HOME: () => '/main/*',
    SEARCH: () => '/search',
    TOP_RATED: () => '/top_rated/*',
    TRENDS: () => '/trends',
    FAVOURITES: () => '/favourites',
    FILM: () => '/movie/:id',
    SERIAL: () => '/tv/:id',
    ACCOUNT: () => '/account'
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
        element: <Trends />,
        path: RouterPath.TRENDS()
    },
    [RouterEnum.TOP_RATED]: {
        element: <Top_rated/>,
        path: RouterPath.TOP_RATED()
    },
    [RouterEnum.ACCOUNT]: {
        element: <Account/>,
        path: RouterPath.ACCOUNT()
    }
}