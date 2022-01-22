import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from '../router';
import {useTypedSelector} from '../hooks/useTypedSelector';

const AppRouter = () => {
    const isAuth = useTypedSelector(state => state.auth.isAuth)
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element/>}/>
                )}
                <Route path="*" element={<Navigate to={RouteNames.EVENT}/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.element/>}/>
                )}
                <Route path="*" element={<Navigate to={RouteNames.LOGIN}/>}/>
            </Routes>
    );
};

export default AppRouter;