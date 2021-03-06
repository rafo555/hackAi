import React, { memo, useMemo } from 'react';
import { SidebarSwitcher } from './Switcher';
import { createUseStyles } from 'react-jss';
import { useSelector } from '../../../store/helpers';
import isEqual from 'react-fast-compare';

const Sidebar = ({page}) => {
    const classes = useStyles();

    const { activeTemplatesSideBar, activeImageSidebar, template_data_count, changeRefine } = useSelector((state) => {
        return {
            activeTemplatesSideBar: state.general.activeTemplatesSideBar,
            activeImageSidebar: state.general.activeImageSidebar,
            template_data_count: state.general.template_data_count,
            changeRefine: state.general.changeRefine
        };
    }, isEqual);

    return useMemo(() => {
        return (
            <aside
                className={classes.sidebar}
                style={{display: changeRefine ? 'none' : 'block'}}>
                <SidebarSwitcher
                    page={page}
                    activeTemplatesSideBar={activeTemplatesSideBar}
                    activeImageSidebar={activeImageSidebar}
                    template_data_count={template_data_count}/>
            </aside>
        )
    }, [page, classes, activeTemplatesSideBar, activeImageSidebar,
        template_data_count, changeRefine])
};

const useStyles = createUseStyles({
    sidebar: {
        width: 220,
        height: `calc(100vh - 40px)`,
        float: 'left',
        marginTop: 40,
    }
});


export default memo(Sidebar);