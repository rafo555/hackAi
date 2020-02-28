import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import Test from "./pages/Test";
import Main from "./pages/Main";
import LilitTest from './pages/LilitTest';
import ZipDownload from "./pages/ZipDownload";

const Routes = () => {
    return (
        <Switch>
            <Route path="/download">
                <ZipDownload />
            </Route>

            <Route path="/test">
                <Test />
            </Route>

            <Route path="/lilit-test">
                <LilitTest />
            </Route>

            <Route path="/">
                <Main />
            </Route>

        </Switch>
    )
}

export default memo(Routes);