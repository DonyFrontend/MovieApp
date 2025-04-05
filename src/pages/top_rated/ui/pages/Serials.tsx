import { Top_ratedStore } from "@/app/providers/store/top_ratedStore/top_ratedStore";
import Loading from "@/pages/load/Loading";
import { imgUrl } from "@/shared/api/tmdb_images/instance";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import rating from '@/shared/assets/icons/rating.svg';


const Serials = () => {
  const { tv, setTV } = Top_ratedStore();
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTV(page, setLoading);
  }, [setTV, page, loading])

  
  const navigate = useNavigate();
  const ref = useRef<HTMLHeadingElement>(null);
  
  const scrollToHead = (value: boolean) => {
      if (ref.current) {
          ref.current.scrollIntoView({
            behavior: 'smooth', // Плавная прокрутка
          });
      }
      if (value) {
        setPage(prev => prev + 1);
      } else setPage(prev => prev - 1);
    };
    
    if (loading) {
      return <Loading />
    }
  
    console.log(tv);

  return (
    <div className='flex flex-col gap-y-2'>
      <h1 ref={ref} className="text-[25px]">Лучшие сериалы</h1>
      <article className={`grid grid-cols-5 max-md:grid-cols-2 max-lg:grid-cols-4 auto-rows-auto gap-5`}>
        {tv.results.map((item, index) => <section key={index} className="rounded-[10px] bg-[#F8B319] p-1 flex flex-col gap-y-2">
          <div className="relative h-full">
            <img src={imgUrl + '/w500' + item.poster_path} alt="IMAGE" className="rounded-[10px] h-full brightness-50" />
            <h2 className="absolute top-2 left-2 text-[20px] font-semibold">{item.name}</h2>
            <div className="absolute left-2 bottom-2 flex items-center gap-x-1">
              <img src={rating} alt="rating" /><p className="text-[20px] font-bold">: {Math.round(item.vote_average * 10) / 10}</p>
            </div>
          </div>
          <div>
            <button onClick={() => navigate(`/tv/${item.id}`)} className="bg-gray-800 hover:bg-gray-950 transition-colors p-2 px-4 rounded-[10px]">Подробнее</button>
          </div>
        </section>)}
      </article>

      <div className="flex gap-x-2 items-center">

        <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={tv.page == 1} onClick={() => scrollToHead(false)}>Назад</button>
        <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={tv.page == tv.total_pages} onClick={() => scrollToHead(true)}>Дальше</button>
        <p className="text-[20px]">{tv.page}/{tv.total_pages}</p>
      </div>
    </div>
  )
}

export default Serials;