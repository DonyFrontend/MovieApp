import { RoutesObject } from '@/shared/const/router'
import { Route, Routes } from 'react-router-dom'

const RoutesComponent = () => {
    return (
        <div className='bg-gray-950 rounded-[10px] overflow-y-auto h-[100%]'>
            <Routes>
                {Object.values(RoutesObject).map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </div>
    )
}

export default RoutesComponent;