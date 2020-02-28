import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';

import Test from "./pages/Test";
import Main from "./pages/Main";

const Routes = () => {
    return (
        <Switch>
            <Route path="/test">
                <Test />
            </Route>

            <Route path="/">
                <Main />
            </Route>
        </Switch>
    )
}

export default memo(Routes);