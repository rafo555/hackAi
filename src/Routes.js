import React, { lazy, memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import {useSelector} from "./store/helpers";
import isEqual from "react-fast-compare";
import Upload from "./components/common/Upload";
import FreeToEdit from "./components/common/FreeToEdit";

const Layout = lazy(() => import('./components/sections/Layout'));
const Templates = lazy(() => import('./pages/Templates'));
const Images = lazy(() => import('./pages/Images'));

const Routes = () => {
    const { activeTemplatesSideBar, activeImageSidebar } = useSelector((state) => {
        return {
            activeTemplatesSideBar: state.general.activeTemplatesSideBar,
            activeImageSidebar: state.general.activeImageSidebar
        };
    }, isEqual);

    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>

                <Route exact path="/images" render={() => {
                    return (
                        <Layout page={'images'}>
                            {activeImageSidebar === 'selected' ?  <Upload/> : (activeImageSidebar === 'freeToEdit' ? <FreeToEdit /> : <Images/>)}
                        </Layout>
                    )
                }}/>

                <Route exact path="/" render={() => {
                    return (
                        <Layout page={'templates'}>
                            {activeTemplatesSideBar === 'effects' ? <Templates/> : <Templates/>}
                        </Layout>
                    )
                }}/>
            </Switch>
        </Suspense>
    )
}

export default memo(Routes);