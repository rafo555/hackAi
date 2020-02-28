import React, { memo, useCallback } from 'react';
import { sidebarTemplatesCategory, sidebarFTCategory } from '../data';
import {createUseStyles} from "react-jss";


const SidebarSwitcher = ({ page }) => {
    const classes = useStyles();

    const changeCategory = useCallback((type) => {
        console.log(type);
    }, []);

    switch (page) {
        case 'templates':
        return sidebarTemplatesCategory.map(el => {
            return (
                <div
                    key={`sidebar_${el.type}`}
                    className={classes.currentCategory}
                    onClick={() => changeCategory(el.type)}
                >{el.name}</div>
            )
        });
        case 'freeToEdit':
            return sidebarFTCategory.map(el => {
                return (
                    <div
                        key={`freeToEdit_${el.type}`}
                        className={classes.currentCategory}
                    >{el.name}</div>
                )
            });
        default:
            break;
    }
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

export default memo(SidebarSwitcher);