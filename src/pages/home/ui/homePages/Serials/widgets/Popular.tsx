import { IHomePopularSerials } from '@/pages/home/model/types/SliceTypes'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { imgUrl } from "@/shared/api/tmdb_images/instance";
import rating from '@/shared/assets/icons/rating.svg';


type popular = {
    data: IHomePopularSerials,
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    heading: string
}

const Popular: React.FC<popular> = ({ count, data, heading, setCount }) => {
    const navigate = useNavigate();
    const ref = useRef<HTMLHeadingElement>(null);

    const scrollToHead = (value: boolean) => {
        if (ref.current) {
            ref.current.scrollIntoView({
                behavior: 'smooth', // Плавная прокрутка
            });
        }
        if (value) {
            setCount(count + 1)
        } else setCount(count - 1);
    };

    return (
        <div className='flex flex-col gap-y-2'>
            <h1 ref={ref} className="text-[25px]">{heading}</h1>
            <article className={`grid grid-cols-5 auto-rows-auto gap-5`}>
                {data.results.map((item, index) => <section key={index} className="rounded-[10px] bg-[#F8B319] p-1 flex flex-col gap-y-2">
                    <div className="relative h-full">
                        <img src={imgUrl + '/w500' + item.poster_path} alt="IMAGE" className="rounded-[10px] h-full brightness-50" />
                        <h2 className="absolute top-2 left-2 text-[20px] font-semibold">{item.name}</h2>
                        <div className="absolute left-2 bottom-2 flex items-center gap-x-1">
                            <img src={rating} alt="rating" /><p className="text-[20px] font-bold">: {item.vote_average}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => navigate(`/tv/${item.id}`)} className="bg-gray-800 hover:bg-gray-950 transition-colors p-2 px-4 rounded-[10px]">Подробнее</button>
                    </div>
                </section>)}
            </article>

            <div className="flex gap-x-2 items-center">
                <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={data.page == 1} onClick={() => scrollToHead(false)}>Назад</button>
                <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={data.page == 500} onClick={() => scrollToHead(true)}>Дальше</button>
                <p className="text-[20px]">{data.page}/500</p>
            </div>
        </div>
    )
}

export default Popular;