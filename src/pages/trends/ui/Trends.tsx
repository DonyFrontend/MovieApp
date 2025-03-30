import { useTrendsStore } from "@/app/providers/store/trends/TrendsStore";
import Loading from "@/pages/load/Loading";
import { useEffect, useRef, useState } from "react";
import { imgUrl } from "@/shared/api/tmdb_images/instance";
import rating from '@/shared/assets/icons/rating.svg';
import { useNavigate } from "react-router-dom";

const Trends = () => {
    const { day, setDay, setWeek, week } = useTrendsStore();
    const [dayPage, setDayPage] = useState<number>(1);
    const [weekPage, setWeekPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false)

    const navigate = useNavigate();

    const ref = useRef<HTMLHeadingElement>(null);
    const ref2 = useRef<HTMLHeadingElement>(null);

    const scrollToHead = (value: boolean, type: string) => {
        switch (type) {
            case "day":
                if (ref.current) {
                    ref.current.scrollIntoView({
                        behavior: 'smooth', // Плавная прокрутка
                    });
                }
                if (value) {;
                    setDayPage(prev => prev + 1)
                } else setDayPage(prev => prev - 1);
                break
            case "week":
                if (ref2.current) {
                    ref2.current.scrollIntoView({
                        behavior: 'smooth', // Плавная прокрутка
                    });
                }
                if (value) {
                    setWeekPage(prev => prev + 1);
                } else setWeekPage(prev => prev - 1);
                break
        }
    };

    useEffect(() => {
        setDay(dayPage, setLoading);
        setWeek(weekPage, setLoading);
    }, [dayPage, weekPage, setDay, setWeek])

    if (loading) {
        return <Loading />
    }

    console.log("Day\n", day);
    console.log("Week\n", week);


    return (
        <div className="p-4 text-white flex flex-col gap-y-12">
            <div className="flex flex-col gap-y-2">
                <h2 ref={ref} className="text-[25px]">Тренды за день:</h2>
                <article className={`grid grid-cols-5 auto-rows-auto gap-5`}>
                    {day.results.map((item, index) => <section key={index} className="rounded-[10px] bg-[#F8B319] p-1 flex flex-col gap-y-2">
                        <div className="relative h-full">
                            <img src={imgUrl + '/w500' + item.poster_path} alt="IMAGE" className="rounded-[10px] h-full brightness-50" />
                            <h2 className="absolute top-2 left-2 text-[20px] font-semibold">{item.title ? item.title : item.name}</h2>
                            <div className="absolute left-2 bottom-2 flex items-center gap-x-1">
                                <img src={rating} alt="rating" /><p className="text-[20px] font-bold">: {Math.round(item.vote_average * 10) / 10}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => navigate(`/${item.media_type}/${item.id}`)} className="bg-gray-800 hover:bg-gray-950 transition-colors p-2 px-4 rounded-[10px]">Подробнее</button>
                        </div>
                    </section>)}
                </article>

                <div className="flex gap-x-2 items-center">

                    <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={day.page == 1} onClick={() => scrollToHead(false, "day")}>Назад</button>
                    <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={day.page == day.total_pages} onClick={() => scrollToHead(true, "day")}>Дальше</button>
                    <p className="text-[20px]">{day.page}/{day.total_pages}</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <h2 className="text-[25px]">Тренды за неделю:</h2>
                <article className={`grid grid-cols-5 auto-rows-auto gap-5`}>
                    {week.results.map((item, index) => <section key={index} className="rounded-[10px] bg-[#F8B319] p-1 flex flex-col gap-y-2">
                        <div className="relative h-full">
                            <img src={imgUrl + '/w500' + item.poster_path} alt="IMAGE" className="rounded-[10px] h-full brightness-50" />
                            <h2 ref={ref2} className="absolute top-2 left-2 text-[20px] font-semibold">{item.title ? item.title : item.name}</h2>
                            <div className="absolute left-2 bottom-2 flex items-center gap-x-1">
                                <img src={rating} alt="rating" /><p className="text-[20px] font-bold">: {Math.round(item.vote_average * 10) / 10}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => navigate(`/${item.media_type}/${item.id}`)} className="bg-gray-800 hover:bg-gray-950 transition-colors p-2 px-4 rounded-[10px]">Подробнее</button>
                        </div>
                    </section>)}
                </article>

                <div className="flex gap-x-2 items-center">

                    <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={week.page == 1} onClick={() => scrollToHead(false, "week")}>Назад</button>
                    <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={week.page == week.total_pages} onClick={() => scrollToHead(true, "week")}>Дальше</button>
                    <p className="text-[20px]">{week.page}/{week.total_pages}</p>
                </div>
            </div>
        </div>
    )
}

export default Trends;