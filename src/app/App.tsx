import "./styles/App.css";
import RoutesComponent from "./providers/router/Routes";
import Navigation from "@/widgets/navigation/Navigation";
import { useEffect, useState } from "react";
import show_nav from "@/shared/assets/icons/show_nav.svg";
import hide_nav from "@/shared/assets/icons/hide_nav.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@/shared/hooks/useMedia";
import Header from "@/widgets/header/Header";

function App() {
  const [nav, setNav] = useState<boolean>(
    JSON.parse(localStorage.getItem("nav") || "true")
  );
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const media = useMediaQuery("(max-width:1024px)");
  console.log(media);

  useEffect(() => {
    if (location == "/") {
      navigate("/main/films");
    }
  }, [location, navigate]);

  function setNavigation(value: boolean) {
    setNav(value);
    localStorage.setItem("nav", JSON.stringify(value));
  }

  return (
    <div className={`w-full flex ${media && 'flex-col'} justify-between font-mono`}>
      {nav && !media && (
        <div className="w-[35svh]">
          <Navigation nav={nav} setNav={setNav} />
        </div>
      )}
      {media && <Header />}
      <div className="w-full h-[92svh]">
        {!media && (
          <div className="p-2">
            <img
              className="cursor-pointer"
              onClick={() => setNavigation(!nav)}
              src={nav ? hide_nav : show_nav}
              alt={nav ? "Показать меню" : "Спрятать меню"}
            />
          </div>
        )}
        <RoutesComponent />
      </div>
    </div>
  );
}

export default App;
