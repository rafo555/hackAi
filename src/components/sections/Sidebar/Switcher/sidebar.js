import React, {memo, useCallback, useState} from 'react';
import {sidebarTemplatesCategory, sidebarFTCategory} from '../data';
import {createUseStyles} from "react-jss";
import classNames from 'classnames';

const SidebarSwitcher = ({page, sidebarTypeCB}) => {
    const classes = useStyles();
    const [activeSidebarIndex, setActiveSidebarIndex] = useState(2);

    const changeCategory = useCallback((type, index) => {
        sidebarTypeCB(type);
        setActiveSidebarIndex(index)
    }, [sidebarTypeCB]);

    switch (page) {
        case 'templates':
            return sidebarTemplatesCategory.map((el, index) => {
                return (
                    <div
                        key={`sidebar_${el.type}`}
                        className={classNames(classes.currentCategory, {
                            [classes.active]: activeSidebarIndex === index,
                        })}
                        onClick={() => changeCategory(el.type, index)}
                    >{el.name}</div>
                )
            });
        case 'images':
            return sidebarFTCategory.map((el, index) => {
                return (
                    <div
                        key={`freeToEdit_${el.type}`}
                        className={classNames(classes.currentCategory, {
                            [classes.active]: activeSidebarIndex === index,
                        })}
                        onClick={() => changeCategory(el.type, index)}
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
    },
    active: {
        color: '#2874f0'
    }
});

export default memo(SidebarSwitcher);