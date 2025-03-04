import { RoutesObject } from '@/shared/const/router'
import { Route, Routes } from 'react-router-dom'

const RoutesComponent = () => {
    return (
        <Routes>
            {Object.values(RoutesObject).map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
            ))}
        </Routes>
    )
}

export default RoutesComponent;