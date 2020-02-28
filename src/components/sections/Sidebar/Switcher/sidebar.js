import React, {memo, useCallback} from 'react';
import {sidebarTemplatesCategory, sidebarFTCategory} from '../data';
import {createUseStyles} from "react-jss";


const SidebarSwitcher = ({page, sidebarTypeCB}) => {
    const classes = useStyles();

    const changeCategory = useCallback((type) => {
        sidebarTypeCB(type)
    }, [sidebarTypeCB]);

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
        case 'images':
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
    currentCategory: {
        fontSize: 14,
        color: '#41474e',
        marginBottom: 10,
        cursor: 'pointer',
        marginLeft: 60,

        '&:hover': {
            borderRadius: 7,
            color: '#2874f0',
        }
    }
});

export default memo(SidebarSwitcher);