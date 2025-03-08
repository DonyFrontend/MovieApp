import './styles/App.css'
import RoutesComponent from './providers/router/Routes';
import Navigation from '@/widgets/navigation/Navigation';
import { useEffect, useState } from 'react';
import show_nav from '@/shared/assets/icons/show_nav.svg'
import hide_nav from '@/shared/assets/icons/hide_nav.svg'
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const [nav, setNav] = useState<boolean>(JSON.parse(localStorage.getItem('nav') || 'false'));
  const location = useLocation().pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (location == '/') {
      navigate('/main/films')
    }
  }, [location, navigate])

  function setNavigation(value: boolean) {
    setNav(value);
    localStorage.setItem('nav', JSON.stringify(value))
  }

  return (
    <div className='w-full flex justify-between font-mono'>
      {nav &&
        <div className='w-[35svh]'>
          <Navigation nav={nav} setNav={setNav} />
        </div>
      }
      <div className='w-full h-[92svh]'>
        <div className='p-2'>
          <img className='cursor-pointer' onClick={() => setNavigation(!nav)} src={nav ? hide_nav : show_nav} alt={nav ? 'Показать меню' : 'Спрятать меню'} />
        </div>
        <RoutesComponent />
      </div>
    </div>
  )
}

export default App;