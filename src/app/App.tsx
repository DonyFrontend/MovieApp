import './styles/App.css'
import RoutesComponent from './providers/router/Routes';
import Navigation from '@/widgets/navigation/Navigation';
import { useState } from 'react';
import show_nav from '@/shared/assets/icons/show_nav.svg'
import hide_nav from '@/shared/assets/icons/hide_nav.svg'

function App() {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <div className='w-full flex justify-between'>
      {nav &&
        <div className='w-[35svh]'>
          <Navigation nav={nav} setNav={setNav} />
        </div>
      }
      <div className='w-full h-[100svh]'>
        <img className='cursor-pointer' onClick={() => setNav(!nav)} src={nav ? hide_nav : show_nav} alt={nav ? 'Показать меню' : 'Спрятать меню'} />
        <RoutesComponent />
      </div>
    </div>
  )
}

export default App;