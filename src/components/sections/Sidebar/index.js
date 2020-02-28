import React, { memo } from 'react';
import { SidebarSwitcher } from './Switcher';

import { createUseStyles } from 'react-jss';

const Sidebar = ({page}) => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            <SidebarSwitcher page={page}/>
        </div>
    )
};

const useStyles = createUseStyles({
    sidebar: {
        width: 100,
        height: 200,
        paddingLeft: 60,
        paddingTop: 40,
        float: 'left',
    },
    currentCategory: {
        fontSize: 14,
        color: '#1d2025',
        opacity: .7,
        marginBottom: 10,
        cursor: 'pointer',
    }
});


export default memo(Sidebar);