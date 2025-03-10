import { popularSerialsStore } from "@/app/providers/store/mainStore/popularSerialsStore";
import { useEffect, useState } from "react";
import Loading from "@/pages/load/Loading";
import Popular from "./widgets/Popular";
import On_the_air from "./widgets/On_the_air";
import Airing_today from "./widgets/Airing_today";

const Serials = () => {
  const {data, setData, on_the_air, setOn_the_air, airing_today, setAiring_today} = popularSerialsStore();
  const [count, setCount] = useState<number>(1);
  const [countAir, setCountAir] = useState<number>(1);
  const [countAirToday, setCountAirToday] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setData(count, setLoading);
    setOn_the_air(countAir, setLoading);
    setAiring_today(countAirToday, setLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, countAir, countAirToday])

  if (loading) {
    return <Loading />
  }

  return (
    <main className='flex flex-col gap-y-12'>
      <Popular count={count} data={data} heading="Популярные сериалы" setCount={setCount}/>
      <On_the_air count={countAir} data={on_the_air} heading="Сейчас в эфире" setCount={setCountAir}/>
      <Airing_today count={countAirToday} data={airing_today} heading="Премьеры сегодня" setCount={setCountAirToday}/>
    </main>
  )
}

export default Serials;