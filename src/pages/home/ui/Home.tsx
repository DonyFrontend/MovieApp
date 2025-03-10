import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Films from "./homePages/Films/Films";
import Serials from "./homePages/Serials/Serials";
import CustomLink from "./CustomLink";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == '/main/*') {
      navigate('/main/films')
    }
  }, [location.pathname, navigate])

  return (
    <div className="text-white p-4 flex flex-col gap-y-8">
      <nav className="flex gap-x-4 items-center">
        <CustomLink text="Сериалы" to="/main/serials"/>
        <CustomLink text="Фильмы" to="/main/films"/>
      </nav>

      <div className="flex flex-col gap-y-5">
        <Routes>
          <Route path="/films" element={<Films/>} />
          <Route path="/serials" element={<Serials />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home;