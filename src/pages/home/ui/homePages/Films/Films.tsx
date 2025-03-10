import { mainStore } from '@/app/providers/store/mainStore/mainStore';
import Loading from '@/pages/load/Loading';
import { useEffect, useState } from 'react';
import Popular from './widgets/Popular';
import Upcoming from './widgets/Upcoming';
import Now_playing from './widgets/Now_playing';

const Films = () => {
    const { data, setData, setUpcoming, upcoming, now_playing, setNow_playing } = mainStore();
    const [count, setCount] = useState<number>(1);
    const [countUpcoming, setCountUpcoming] = useState<number>(1);
    const [countNowPlaying, setCountNowPlaying] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setData(count, setLoading);
        setUpcoming(countUpcoming, setLoading);
        setNow_playing(countNowPlaying, setLoading);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count, countUpcoming, countNowPlaying])

    if (loading) {
        return <Loading />
    }

    return (
        <main className='flex flex-col gap-y-12' >
            <Popular count={count} data={data} heading='Популярные фильмы:' setCount={setCount} />
            <Upcoming count={countUpcoming} data={upcoming} heading='Ожидаемые премьеры' setCount={setCountUpcoming}/>
            <Now_playing count={countNowPlaying} data={now_playing}  heading='Сейчас в кино' setCount={setCountNowPlaying}/>
        </main>
    )
}

export default Films;