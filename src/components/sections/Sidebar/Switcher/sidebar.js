import React, {memo, useCallback} from 'react';
import {sidebarTemplatesCategory, sidebarFTCategory} from '../data';
import {createUseStyles} from "react-jss";
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import {
    CHANGE_TEMPLATES_SIDEBAR,
    CHANGE_IMAGES_SIDEBAR
} from '../../../../store/actionTypes';

const SidebarSwitcher = ({page, activeTemplatesSideBar, activeImageSidebar}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const changeTemplateCategory = useCallback((type) => {
        dispatch({
            type: CHANGE_TEMPLATES_SIDEBAR,
            activeTemplatesSideBar: type
        })
    }, [dispatch]);

    const changeImagesCategory = useCallback((type) => {
        dispatch({
            type: CHANGE_IMAGES_SIDEBAR,
            activeImageSidebar: type
        })
    }, [dispatch]);

    switch (page) {
        case 'templates':
            return sidebarTemplatesCategory.map(el => {
                return (
                    <div
                        key={`sidebar_${el.type}`}
                        className={classNames(classes.currentCategory, {
                            [classes.active]: activeTemplatesSideBar === el.type,
                        })}
                        onClick={() => changeTemplateCategory(el.type)}
                    >{el.name}</div>
                )
            });
        case 'images':
            return sidebarFTCategory.map(el => {
                return (
                    <div
                        key={`freeToEdit_${el.type}`}
                        className={classNames(classes.currentCategory, {
                            [classes.active]: activeImageSidebar === el.type,
                        })}
                        onClick={() => changeImagesCategory(el.type)}
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