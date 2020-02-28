import React, { lazy, memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import {useSelector} from "./store/helpers";
import isEqual from "react-fast-compare";
import Selected from "./components/common/Selected";
import FreeToEdit from "./components/common/FreeToEdit";

const Layout = lazy(() => import('./components/sections/Layout'));
const Templates = lazy(() => import('./pages/Templates'));
const Images = lazy(() => import('./pages/Images'));
const Erase = lazy(() => import('./pages/Erase'));
const Result = lazy(() => import('./pages/Results'));
const Editor = lazy(() => import('./pages/Editor'));

const Routes = () => {
    const { activeTemplatesSideBar, activeImageSidebar, template_data } = useSelector((state) => {
        return {
            activeTemplatesSideBar: state.general.activeTemplatesSideBar,
            activeImageSidebar: state.general.activeImageSidebar,
            template_data: state.general.template_data,
        };
    }, isEqual);


    return (
        <Suspense fallback={<div>Loading</div>}>
            <Switch>
                <Route exact path="/erase" render={() => {
                    return (
                        <Erase />
                    )
                }} />

                <Route exact path="/editor" render={() => {
                    return (
                        <Editor />
                    )
                }} />

                <Route exact path="/images" render={() => {
                    return (
                        <Layout page={'images'}>
                            {activeImageSidebar === 'selected' && template_data.length ?  <Selected/>  : (activeImageSidebar === 'freeToEdit' ? <FreeToEdit /> : <Images/>)}
                        </Layout>
                    )
                }} />

                <Route exact path="/" render={() => {
                    return (
                        <Layout page={'templates'}>
                            {activeTemplatesSideBar === 'effects' ? <Templates/> : <Templates/>}
                        </Layout>
                    )
                }}/>

                <Route exact path="/results" render={() => {
                    return (
                        <Layout page={'results'}>
                            <Result/>
                        </Layout>
                    )
                }} />
            </Switch>
        </Suspense>
    )
}

export default memo(Routes);