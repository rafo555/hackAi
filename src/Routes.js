import React, { lazy, memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from "./pages/Main";
import Templates from './pages/Templates';

const Layout = lazy(() => import('./components/sections/Layout'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
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