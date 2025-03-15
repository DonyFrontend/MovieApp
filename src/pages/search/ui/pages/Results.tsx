import { useSearchStore } from "@/app/providers/store/search/searchStore";
import { useEffect, useRef, useState } from "react";
import { imgUrl } from '@/shared/api/tmdb_images/instance';
import rating from '@/shared/assets/icons/rating.svg';
import { useNavigate } from "react-router-dom";
import Loading from "@/pages/load/Loading";

type results = {
    query: string,
    type: string
}

const Results: React.FC<results> = ({ query, type }) => {
    const { other_data, setOtherData } = useSearchStore();
    const [page, setPage] = useState<number>(parseInt(sessionStorage.getItem("resultPage") || "1"));
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        setOtherData(page, setLoading, query, type);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const navigator = (media_type: string | undefined) => {
        if (type == "multi") {
            return media_type;
        } else return type
    }

    const scrollToHead = (value: boolean) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth', // Плавная прокрутка
            });
        }
        if (value) {
            setPage(page + 1);
            sessionStorage.setItem("resultPage", String(page + 1));
        } else {
            setPage(page - 1);
            sessionStorage.setItem("resultPage", String(page - 1));
        }
    };

    if (loading) {
        return <Loading />
    }

    console.log(other_data);

    return (
        <div className="text-white p-4 flex flex-col gap-y-8">
            <h2 ref={ref} className="text-[25px]">Другие результаты:</h2>
            <article className={`grid grid-cols-5 auto-rows-auto gap-5`}>
                {page == 1 ? other_data.results.slice(1).map((item, index) => <section key={index} className="rounded-[10px] bg-[#F8B319] p-1 flex flex-col gap-y-2">
                    <div className="relative h-full">
                        <img src={imgUrl + '/w500' + item.poster_path} alt="IMAGE" className="rounded-[10px] h-full brightness-50" />
                        <h2 className="absolute top-2 left-2 text-[20px] font-semibold">{item.title || item.name}</h2>
                        <div className="absolute left-2 bottom-2 flex items-center gap-x-1">
                            <img src={rating} alt="rating" /><p className="text-[20px] font-bold">: {Math.round(item.vote_average * 10) / 10}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => navigate(`/${navigator(item.media_type)}/${item.id}`)} className="bg-gray-800 hover:bg-gray-950 transition-colors p-2 px-4 rounded-[10px]">Подробнее</button>
                    </div>
                </section>) : other_data.results.map((item, index) => <section key={index} className="rounded-[10px] bg-[#F8B319] p-1 flex flex-col gap-y-2">
                    <div className="relative h-full">
                        <img src={imgUrl + '/w500' + item.poster_path} alt="IMAGE" className="rounded-[10px] h-full brightness-50" />
                        <h2 className="absolute top-2 left-2 text-[20px] font-semibold">{item.title || item.name}</h2>
                        <div className="absolute left-2 bottom-2 flex items-center gap-x-1">
                            <img src={rating} alt="rating" /><p className="text-[20px] font-bold">: {Math.round(item.vote_average * 10) / 10}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => navigate(`/${navigator(item.media_type)}/${item.id}`)} className="bg-gray-800 hover:bg-gray-950 transition-colors p-2 px-4 rounded-[10px]">Подробнее</button>
                    </div>
                </section>)}
            </article>

            <div className="flex gap-x-2 items-center">

                <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={other_data.page == 1} onClick={() => scrollToHead(false)}>Назад</button>
                <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={other_data.page == other_data.total_pages} onClick={() => scrollToHead(true)}>Дальше</button>
                <p className="text-[20px]">{page}/{other_data.total_pages}</p>
            </div>
        </div>
    )
}

export default Results;