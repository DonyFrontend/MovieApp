import home from "@/shared/assets/icons/home.svg";
import home_active from "@/shared/assets/icons/home_active.svg";
import discover from "@/shared/assets/icons/discover.svg";
import discover_active from "@/shared/assets/icons/discover_active.svg";
import top_rated from "@/shared/assets/icons/top_rated.svg";
import top_rated_active from "@/shared/assets/icons/top_rated_active.svg";
import trends from "@/shared/assets/icons/trends.svg";
import trends_active from "@/shared/assets/icons/trends_active.svg";
import settings from "@/shared/assets/icons/settings.svg";
import settings_active from "@/shared/assets/icons/settings_active.svg";
import logout from "@/shared/assets/icons/logout.svg";
import logout_active from "@/shared/assets/icons/logout_active.svg";
import { ICustomLink } from "@/shared/ui/link/types/LinkTypes";
import { RouterPath } from "@/shared/const/router";

export const navItems: ICustomLink[] = [
  {
    text: "Главная",
    image: home,
    to: RouterPath.HOME(),
    activeImage: home_active,
  },
  {
    text: "Поиск",
    image: discover,
    to: RouterPath.SEARCH(),
    activeImage: discover_active,
  },
  {
    text: "Top Rated",
    image: top_rated,
    to: RouterPath.TOP_RATED(),
    activeImage: top_rated_active,
  },
  {
    text: "Тренды",
    image: trends,
    to: RouterPath.TRENDS(),
    activeImage: trends_active,
  },
  {
    text: "Аккаунт",
    image: settings,
    to: RouterPath.ACCOUNT(),
    activeImage: settings_active,
  },
  {
    text: "Выйти",
    image: logout,
    to: "/logout",
    activeImage: logout_active,
  },
];