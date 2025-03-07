import { mainStore } from '@/app/providers/store/mainStore/mainStore';
import Loading from '@/pages/load/Loading';
import { imgUrl } from '@/shared/api/tmdb_images/instance';
import rating from '@/shared/assets/icons/rating.svg';
import { useEffect, useState } from 'react';

const Films = () => {
    const data = mainStore();
    const [count, setCount] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        data.setData(count, setLoading);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <Loading/>
    }

    return (
        <>
            <h1 className="text-[25px]">Популярные фильмы:</h1>
            <article className={`grid grid-cols-5 auto-rows-auto gap-5`}>
                {data.data.results.map((item, index) => <section key={index} className="rounded-[10px] bg-[#F8B319] p-1 flex flex-col gap-y-2">
                    <div className="relative">
                        <img src={imgUrl + item.poster_path} alt="IMAGE" className="rounded-[10px] brightness-50" />
                        <h2 className="absolute top-2 left-2 text-[20px] font-semibold">{item.title}</h2>
                        <div className="absolute left-2 bottom-2 flex items-center gap-x-1">
                            <img src={rating} alt="rating" /><p className="text-[20px] font-bold">: {item.vote_average}</p>
                        </div>
                    </div>
                    <div>
                        <button className="bg-gray-800 hover:bg-gray-950 transition-colors p-2 px-4 rounded-[10px]">Подробнее</button>
                    </div>
                </section>)}
            </article>

            <div className="flex gap-x-2 items-center">
                <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={data.data.page == 1} onClick={() => setCount(count - 1)}>Назад</button>
                <button className="bg-[#F8B319] hover:bg-yellow-600 transition-colors p-2 px-4 rounded-[10px]" disabled={data.data.page == 500} onClick={() => setCount(count + 1)}>Дальше</button>
                <p className="text-[20px]">{data.data.page}/500</p>
            </div>
        </>
    )
}

export default Films;