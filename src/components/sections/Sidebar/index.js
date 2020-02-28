import React, { memo, useMemo } from 'react';
import { SidebarSwitcher } from './Switcher';
import { createUseStyles } from 'react-jss';
import { useSelector } from '../../../store/helpers';
import isEqual from 'react-fast-compare';

const Sidebar = ({page}) => {
    const classes = useStyles();

    const { activeTemplatesSideBar, activeImageSidebar } = useSelector((state) => {
        return {
            activeTemplatesSideBar: state.general.activeTemplatesSideBar,
            activeImageSidebar: state.general.activeImageSidebar
        };
    }, isEqual);

    return useMemo(() => {
        return (
            <div className={classes.sidebar}>
                <SidebarSwitcher
                    page={page}
                    activeTemplatesSideBar={activeTemplatesSideBar}
                    activeImageSidebar={activeImageSidebar}/>
            </div>
        )
    }, [page, classes, activeTemplatesSideBar, activeImageSidebar])
};

const useStyles = createUseStyles({
    sidebar: {
        width: 220,
        height: 600,
        float: 'left',
        marginTop: 40,
    }
});


export default memo(Sidebar);