import { popularSerialsStore } from "@/app/providers/store/mainStore/popularSerialsStore";
import { imgUrl } from "@/shared/api/tmdb_images/instance";
import { useEffect, useRef, useState } from "react";
import rating from '@/shared/assets/icons/rating.svg';
import Loading from "@/pages/load/Loading";
import { useNavigate } from "react-router-dom";

const Serials = () => {
  const popularSerials = popularSerialsStore();
  const [count, setCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    popularSerials.setData(count, setLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  const containerRef = useRef<HTMLHeadingElement>(null);

  // Функция для прокрутки вверх
  const scrollToTop = (value: boolean) => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: 'smooth', // Плавная прокрутка
      });
    }
    if (value) {
      setCount(count + 1)
    } else setCount(count - 1);
  };

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <h1 ref={containerRef} className="text-[25px]">Популярные сериалы:</h1>
      <article className={`grid grid-cols-5 auto-rows-auto gap-5`}>
        {popularSerials.data.results.map((item, index) => <section key={index} className="rounded-[10px] bg-[#F8B319] p-1 flex flex-col gap-y-2">
          <div className="relative h-full">
            <img src={imgUrl + '/w500' + item.poster_path} alt="IMAGE" className="rounded-[10px] h-full brightness-50" />
            <h2 className="absolute top-2 left-2 text-[20px] font-semibold">{item.name}</h2>
            <div className="absolute left-2 bottom-2 flex items-center gap-x-1">
              <img src={rating} alt="rating" /><p className="text-[20px] font-bold">: {item.vote_average}</p>
            </div>
          </div>
          <div>
            <button onClick={() => navigate(`/serial/${item.id}`)} className="bg-gray-800 hover:bg-gray-950 transition-colors p-2 px-4 rounded-[10px]">Подробнее</button>
          </div>
        </section>)}
      </article>

      <div className="flex gap-x-2 items-center">
        <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={popularSerials.data.page == 1} onClick={() => scrollToTop(false)}>Назад</button>
        <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={popularSerials.data.page == 500} onClick={() => scrollToTop(true)}>Дальше</button>
        <p className="text-[20px]">{popularSerials.data.page}/500</p>
      </div>
    </>
  )
}

export default Serials;