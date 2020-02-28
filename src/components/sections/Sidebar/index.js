import React, { memo } from 'react';
// import { SidebarSwitcher } from './Switcher';

import { sidebarCategory } from './data';
import { createUseStyles } from 'react-jss';

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            {sidebarCategory.map(el => {
                return (
                    <div
                        key={`sidebar_${el.type}`}
                        className={classes.currentCategory}
                    >{el.name}</div>
                )
            })}
        </div>
    )
};

const useStyles = createUseStyles({
    sidebar: {
        width: 100,
        height: 200,
        paddingLeft: 60,
        float: 'left'
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