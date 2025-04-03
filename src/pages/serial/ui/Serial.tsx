import { SerialStore } from "@/app/providers/store/serial/serialStore";
import Loading from "@/pages/load/Loading";
import { imgUrl } from "@/shared/api/tmdb_images/instance";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import rating from "@/shared/assets/icons/rating.svg";
import back from "@/shared/assets/icons/back.svg";
import fav_add from "@/shared/assets/icons/fav_add.svg";
import fav_remove from "@/shared/assets/icons/fav_remove.svg";
import { useAccountStore } from "@/app/providers/store/account/accountStore";

type Params = {
  id: string;
};

const Serial = () => {
  const params = useParams<Params>();
  const [loading, setLoading] = useState<boolean>(false);
  const { data, setData, getFav, isFav, setFav } = SerialStore();
  const navigate = useNavigate();
  const { account } = useAccountStore();
  const session_id = localStorage.getItem("session_id");

  useEffect(() => {
    setData(params.id, setLoading);
    if (session_id && params.id) {
      getFav(account.id, setLoading, parseInt(params.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(isFav);

  function setFavorite() {
    if (session_id) {
      setFav(account.id, session_id, data.id);
    } else navigate("/auth");
  }

  if (loading) {
    return <Loading />;
  }

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
            onClick={setFavorite}
            className="bg-gray-800 p-2 rounded-[10px]"
          >
            <img src={isFav ? fav_remove : fav_add} alt="Favorite" />
          </button>
        </div>
        <main className="flex w-full justify-between">
          <div className="flex flex-col w-[65%] gap-y-8 items-start">
            <div className="flex flex-col gap-y-3 items-start">
              <h1 className="text-[30px] font-bold">{data.name}</h1>
              <div className="flex items-center gap-x-1">
                <img src={rating} alt="rating" />
                <p className="text-[20px] font-bold">
                  : {Math.round(data.vote_average * 10) / 10}
                </p>
              </div>
              <p className="text-[20px]">
                {data.overview == ""
                  ? "Описание: (Информация отсутствует)"
                  : data.overview}
              </p>
              <div className="flex gap-x-2 items-center text-[20px]">
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
              <div className="flex gap-x-2 items-center text-[20px]">
                <p>Авторы:</p>
                {data.genres.length > 1
                  ? data.created_by.map((item, index) => (
                      <p key={index}>
                        {item.name}
                        {index !== data.genres.length - 1 && ","}
                      </p>
                    ))
                  : "Информация отсутствует"}
              </div>
              <p className="text-[20px]">
                Длительность эпизода: {data.episode_run_time[0]}м
              </p>
              <p className="text-[20px]">
                Дата премьеры: {data.first_air_date}
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <h2 className="text-[30px] font-bold">Сезоны</h2>
              <article className="flex flex-col gap-y-6">
                {data.seasons.map((item, index) => (
                  <section key={index} className="flex text-[20px] flex-col">
                    <p>
                      {item.name}: {item.episode_count} эпизодов
                    </p>
                    <p>Дата выхода 1 эпизода: {item.air_date}</p>
                  </section>
                ))}
              </article>
            </div>
          </div>
          <div>
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

export default Serial;
