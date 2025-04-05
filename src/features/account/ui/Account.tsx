import { useAccountStore } from "@/app/providers/store/account/accountStore";
import Loading from "@/pages/load/Loading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "@/shared/assets/icons/avatar.svg";
import { imgUrl } from "@/shared/api/tmdb_images/instance";
import account_href from "@/shared/api/account_href";
import info_mark from "@/shared/assets/icons/Info_mark.svg";
import FavMovies from "./pages/FavMovies";
import FavTV from "./pages/FavTV";

const Account = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("session_id");
  const { account, setAccount, fav_movies, fav_tv, getFavMovies, getFavTV } =
    useAccountStore();
  const [loading, setLoading] = useState<boolean>(false);
  const avatarPath = account.avatar.tmdb.avatar_path;
  const [count_movies, setCount_movies] = useState<number>(1);
  const [count_tv, setCount_tv] = useState<number>(1);

  useEffect(() => {
    if (!id) {
      navigate("/auth");
    }
    if (id != null && account.id == 0) {
      setAccount(id, setLoading);
    }
    getFavTV(account.id, setLoading);
    getFavMovies(account.id, setLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Movies:\r\n", fav_movies, "\r\nTV:\r\n", fav_tv);

  if (loading) {
    return <Loading />;
  }
  console.log(account);

  return (
    <div className="p-3 text-white flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-4">
        <div className="flex gap-x-8">
          <img
            src={avatarPath ? imgUrl + "/w342" + avatarPath : avatar}
            alt="Avatar"
            className="rounded-full h-[120px] w-[120px] object-cover"
          />
          <div className="flex flex-col justify-around">
            <div>
              <h3 className="text-[30px] font-semibold">{account.name}</h3>
              <p className="text-gray-400">{account.username}</p>
            </div>
            <p className="text-gray-400">Country: {account.iso_3166_1}</p>
          </div>
        </div>
        <div className="flex gap-x-3 items-center">
          <a
            target="_blank"
            href={account_href + account.username}
            className="p-3 bg-mainColor rounded-[10px] w-[300px] flex justify-center"
          >
            Настройки аккаунта
          </a>
          <img
            src={info_mark}
            alt="Info"
            className="w-[35px] h-[35px]"
            title={`Данный сайт не может менять персональные данные, поэтому вы можете сделать это на официальном сайте`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-10">
        <h3 className="text-[25px] font-semibold">Избранные</h3>
        <div className="flex flex-col gap-y-12">
          {fav_movies.results.length ? (
            <FavMovies
              count={count_movies}
              data={fav_movies}
              heading="Фильмы"
              setCount={setCount_movies}
            />
          ) : (
            <p>
              Вы еще не добавили ни одного фильма. Начните делать это{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => navigate("/main/films")}
              >
                прямо сейчас!
              </span>
            </p>
          )}
          {fav_tv.results.length ? (
            <FavTV
              count={count_tv}
              data={fav_tv}
              heading="Сериалы"
              setCount={setCount_tv}
            />
          ) : (
            <p>
              Вы еще не добавили ни одного сериала. Начните делать это{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => navigate("/main/serials")}
              >
                прямо сейчас!
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
