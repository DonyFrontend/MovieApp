import CustomLink from '@/pages/home/ui/CustomLink';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Films from './pages/Films';
import Serials from './pages/Serials';

const Top_rated = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname == '/top_rated/*') {
            navigate('/top_rated/films')
        }
    }, [location.pathname, navigate])

    return (
        <div className="text-white p-4 flex flex-col gap-y-8">
            <nav className="flex gap-x-4 items-center">
                <CustomLink text="Сериалы" to="/top_rated/serials" />
                <CustomLink text="Фильмы" to="/top_rated/films" />
            </nav>

            <div className="flex flex-col gap-y-5">
                <Routes>
                    <Route path="/films" element={<Films />} />
                    <Route path="/serials" element={<Serials />} />
                </Routes>
            </div>
        </div>
    )
}

export default Top_rated;