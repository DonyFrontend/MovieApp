import React, { useEffect, useState } from 'react'
import { IBestResult } from '../../model/types/types'
import { imgUrl } from '@/shared/api/tmdb_images/instance';
import rating from '@/shared/assets/icons/rating.svg';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@/shared/hooks/useMedia';

type props = {
    type: string
}

const Best_result: React.FC<IBestResult & props> = ({ data, type }) => {
    const [navigator, setNavigator] = useState<string>("");
    const navigate = useNavigate();
    const media = useMediaQuery('(max-width:768px)');

    useEffect(() => {
        switch (type) {
            case "tv":
                setNavigator("tv");
                break;
            case "movie":
                setNavigator("movie");
                break
            case "multi":
                setNavigator(data.media_type == "tv" ? "tv" : "movie");
                break
            default:
                break;
        }
    }, [data.media_type, type])

    return (

        <div
            className="relative w-full h-screen bg-cover bg-center rounded-[10px]"
            style={{ backgroundImage: `${!media && `url(${imgUrl + `/w1280` + data.backdrop_path})`}` }}
        >
            <div className="absolute inset-0 md:bg-black opacity-50"></div>

            <div className="relative z-10 flex items-center justify-center h-full">
                <main className='flex flex-col max-md:items-center p-4 rounded-[10px] text-[20px] gap-y-6'>
                    <h1 className='text-[25px] text-outline'>Лучший результат</h1>
                    <div className='flex max-md:items-center max-md:flex-col gap-x-16'>
                        <div className='min-w-max'>
                            <img src={imgUrl + `/w${media ? '300' : '342'}` + data.poster_path} className='rounded-[10px]' alt="Poster" />
                        </div>
                        <div className='flex max-md:items-center flex-col gap-y-3'>
                            <h2 className='text-[30px] text-outline'>{data.name ? data.name : data.title}</h2>
                            <div className='flex gap-x-4 items-center'>
                                <img src={rating} alt="Rating" />
                                <p className='text-outline'>{Math.round(data.vote_average * 10) / 10}</p>
                            </div>
                            <p className='text-outline'>{data.overview}</p>
                            <p className='text-outline'>Дата релиза: {data.release_date ? data.release_date : data.first_air_date}</p>
                            <button onClick={() => navigate(`/${navigator}/${data.id}`)} className="bg-[#F8B319] hover:bg-[#a57a1b] w-[24svh] transition-colors p-2 px-4 rounded-[10px]">Подробнее</button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Best_result;