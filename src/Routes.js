import React, { lazy, memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Layout = lazy(() => import('./components/sections/Layout'));
const Templates = lazy(() => import('./pages/Templates'));
const Images = lazy(() => import('./pages/Images'));
const Erase = lazy(() => import('./pages/Erase'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                <Route exact path="/erase" render={() => {
                    return (
                        <Erase />
                    )
                }} />

                <Route exact path="/images" render={() => {
                    return (
                        <Layout page={'images'}>
                            <Images />
                        </Layout>
                    )
                }} />

                <Route exact path="/" render={() => {
                    return (
                        <Layout page={'templates'}>
                            <Templates />
                        </Layout>
                    )
                }} />
            </Switch>
        </Suspense>
    )
}

export default memo(Routes);