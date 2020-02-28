import React, { memo, useCallback, useState } from 'react';
import { SidebarSwitcher } from './Switcher';

import { createUseStyles } from 'react-jss';

const Sidebar = ({page}) => {
    const classes = useStyles();

    const [categoryType, setCategoryType] = useState('effects');

    const sidebarTypeCB = useCallback((type) => {
        setCategoryType(type)
    }, []);

    console.log(categoryType)

    return (
        <div className={classes.sidebar}>
            <SidebarSwitcher
                page={page}
                sidebarTypeCB={sidebarTypeCB}/>
        </div>
    )
};

const useStyles = createUseStyles({
    sidebar: {
        width: 200,
        float: 'left',
        marginTop: 40,
    }
});


export default memo(Sidebar);