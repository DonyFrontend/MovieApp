import { FilmStore } from "@/app/providers/store/film/FilmStore";
import Loading from "@/pages/load/Loading";
import { imgUrl } from "@/shared/api/tmdb_images/instance";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import back from "@/shared/assets/icons/back.svg";
import rating from "@/shared/assets/icons/rating.svg";
import youtube from "@/shared/api/youtube";
import { useAccountStore } from "@/app/providers/store/account/accountStore";
import fav_add from "@/shared/assets/icons/fav_add.svg";
import fav_remove from "@/shared/assets/icons/fav_remove.svg";

type Params = {
  id: string;
};

const Film = () => {
  const params = useParams<Params>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { data, setData, setVideos, videos, setFav, getFav, isFav } =
    FilmStore();
  const { account } = useAccountStore();
  const session_id = localStorage.getItem("session_id");

  useEffect(() => {
    setData(params.id, setLoading);
    setVideos(params.id, setLoading);
    if (session_id && params.id) {
      getFav(account.id, setLoading, parseInt(params.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setFavorite() {
    if (session_id) {
      setFav(account.id, session_id, data.id);
    } else navigate("/auth");
  }

  if (loading) {
    return <Loading />;
  }

  const trailer = videos.results.length > 1 ? "Трейлеры" : "Трейлер";

  console.log(data);

  return (
    <div className="relative text-white w-full h-full flex justify-center py-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgUrl + "/w1280" + data.backdrop_path})`,
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 h-full overflow-y-auto flex flex-col gap-y-8 justify-between w-[90%]">
        <div className="flex gap-x-5 items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex gap-x-3 items-center text-[20px]"
          >
            <span className="p-2 rounded-[10px] backdrop-brightness-[2]">
              <img src={back} alt="BACK" />
            </span>
            <p>Back</p>
          </button>
          <button
            onClick={session_id ? setFavorite : () => navigate('/auth')}
            className="bg-gray-800 p-2 rounded-[10px]"
          >
            <img src={isFav ? fav_remove : fav_add} alt="Favorite" />
          </button>
        </div>
        <main className="flex max-md:flex-col-reverse max-md:items-center w-full justify-between">
          <div className="flex flex-col w-[65%] max-lg:w-full gap-y-8 items-start">
            <div className="flex flex-col max-md:items-center gap-y-3 items-start">
              <h1 className="text-[30px] font-bold">{data.title}</h1>
              <div className="flex items-center gap-x-1">
                <img src={rating} alt="rating" />
                <p className="text-[20px] font-bold">
                  : {Math.round(data.vote_average * 10) / 10}
                </p>
              </div>
              <p className="text-[20px]">{data.overview}</p>
              <div className="flex flex-wrap gap-x-2 items-center text-[20px]">
                <p>
                  {data.production_companies.length > 1
                    ? "Киностудий"
                    : "Киностудия"}
                  :
                </p>
                {data.production_companies.length > 1
                  ? data.production_companies.map((item, index) => (
                      <p key={index} className="text-nowrap">
                        {item.name}
                        {index !== data.production_companies.length - 1 && ","}
                      </p>
                    ))
                  : "Информация отсутствует"}
              </div>
              <p className="text-[20px]">Дата релиза: {data.release_date}</p>
              <div className="flex gap-x-2 flex-wrap items-center text-[20px]">
                <p>Жанры:</p>
                {data.genres.length > 1
                  ? data.genres.map((item, index) => (
                      <p key={index}>
                        {item.name}
                        {index !== data.genres.length - 1 && ","}
                      </p>
                    ))
                  : "Информация отсутствует"}
              </div>
              <p className="text-[20px]">
                Бюджет: {data.budget.toLocaleString()}$
              </p>
            </div>

            <div className="w-full flex flex-col gap-y-5">
              <h2 className="text-[30px] font-bold">{trailer}</h2>
              <article className="flex flex-col gap-y-12">
                {videos.results.length > 0 ? (
                  videos.results.map((item, index) => (
                    <section key={index} className="flex flex-col gap-y-2">
                      <h2 className="text-[20px]">{item.name}</h2>
                      <iframe
                        src={youtube + `/${item.key}`}
                        className="h-[400px] max-lg:w-[90%] rounded-[10px]"
                      ></iframe>
                    </section>
                  ))
                ) : (
                  <h2 className="text-[20px] font-semibold">
                    (Трейлер отсутствует)
                  </h2>
                )}
              </article>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-4">
            <img
              className="rounded-[10px]"
              src={imgUrl + "/w342" + data.poster_path}
              alt=""
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Film;
