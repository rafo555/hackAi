import React, {memo, useCallback} from 'react';
import {sidebarTemplatesCategory, sidebarFTCategory} from '../data';
import {createUseStyles} from "react-jss";
import {useDispatch} from 'react-redux';
import classNames from 'classnames';
import uploadImg from '../../../../assets/svg/upload-2.svg'
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
                    ><p> {el.name} </p></div>
                )
            });
        case 'images':
            return <div>
                <div
                    className={classes.currentUpload}
                    onClick={() => changeImagesCategory('upload')}>
                    <div
                        className={classNames(classes.uploadImage, {
                            [classes.active]: activeImageSidebar === 'upload',
                        })}>
                        <img src={uploadImg} className={classes.uploadIcon}></img>
                        Upload
                    </div>
                </div>
                {
                    sidebarFTCategory.map(el => {
                        return (
                            <div
                                key={`freeToEdit_${el.type}`}
                                className={classNames(classes.currentCategory, {
                                    [classes.active]: activeImageSidebar === el.type,
                                })}
                                onClick={() => changeImagesCategory(el.type)}
                            ><p>{el.name}</p></div>
                        )
                    })
                }
                <div
                    className={classNames( classes.selectedImages, classes.currentCategory, {
                        [classes.active]: activeImageSidebar === 'selected',
                    })}
                    onClick={() => changeImagesCategory('selected')}>
                    <p>
                        Selected (0)
                    </p>
                </div>
            </div>;

        default:
            break;
    }
};

const useStyles = createUseStyles({
    currentCategory: {
        fontSize: 14,
        color: '#41474e',
        cursor: 'pointer',
        width: 220,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
            borderRadius: 7,
            color: '#2874f0',
            backgroundColor: '#f3f5ff'
        }
    },
    uploadIcon: {
        marginRight: 10,
        width: 13,
        height: 18
    },
    active: {
        color: '#2874f0'
    },
    uploadImage: {
        width: 150,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 17px 41px 0 rgba(84, 93, 107, 0.12)',
        backgroundColor: '#fff'

    },
    currentUpload: {
        marginBottom: 40,
        fontSize: 14,
        color: '#41474e',
        cursor: 'pointer',
        width: 220,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
            borderRadius: 7,
            color: '#2874f0',
        }
    },
    selectedImages: {
        marginTop: 80
    }
});

export default memo(SidebarSwitcher);