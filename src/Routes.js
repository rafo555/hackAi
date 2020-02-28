import React, { lazy, memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Layout = lazy(() => import('./components/sections/Layout'));
const Templates = lazy(() => import('./pages/Templates'));
const Images = lazy(() => import('./pages/Images'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>

                <Route exact path="/images" render={() => {
                    return (
                        <Layout>
                            <Images/>
                        </Layout>
                    )
                }}/>

                <Route exact path="/" render={() => {
                    return (
                        <Layout>
                            <Templates/>
                        </Layout>
                    )
                }}/>
            </Switch>
        </Suspense>
    )
}

export default memo(Routes);