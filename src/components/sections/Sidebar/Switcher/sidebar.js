import React, { memo, useCallback } from 'react';
import { sidebarTemplatesCategory, sidebarFTCategory } from '../data';
import { createUseStyles } from "react-jss";
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import uploadImg from '../../../../assets/svg/combined-shape.svg'
import {
    CHANGE_TEMPLATES_SIDEBAR,
    CHANGE_IMAGES_SIDEBAR, CHOOSE_IMAGE
} from '../../../../store/actionTypes';
import { readDropDownFile } from "../../../../utils";

const SidebarSwitcher = ({ page, activeTemplatesSideBar, activeImageSidebar, template_data_count }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const changeTemplateCategory = useCallback((type) => {
        dispatch({
            type: CHANGE_TEMPLATES_SIDEBAR,
            activeTemplatesSideBar: type
        });
    }, [dispatch]);

    const changeImagesCategory = useCallback((type) => {
        dispatch({
            type: CHANGE_IMAGES_SIDEBAR,
            activeImageSidebar: type
        });
    }, [dispatch]);

    const uploadImage = useCallback(async (ev) => {

        Promise.all(Array.from(ev.target.files).map(async el => {
            return await readDropDownFile(el);
        })).then(results => {
            const data = results.map((el, index) => {
                return {
                    url: el,
                    id: `image_${Date.now().toString(36)}_${index}`,
                    type: 'link'
                }
            });

            dispatch({
                type: CHOOSE_IMAGE,
                data
            });
        });
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
                    >
                        <p> {el.name} </p>
                    </div>
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


                        {/*<label htmlFor={'input'}>*/}

                        <img src={uploadImg} className={classes.uploadIcon} alt={''}/>
                        Upload


                        <input
                            id={'input'}
                            type={'file'}
                            className={classes.uploadImageInput}
                            accept={'image/jpeg, image/png'}
                            multiple={true}
                            onChange={uploadImage}/>
                        {/*</label>*/}
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
                        Selected ({template_data_count})
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
        width: 100,
        height: 30,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 80,

        '&:hover': {
            borderRadius: 7,
            backgroundColor: '#f3f5ff'
        }
    },
    uploadIcon: {
        marginRight: 10,
        width: 13,
        height: 18,

    },
    active: {
        color: '#2874f0'
    },
    uploadImage: {
        width: 140,
        borderRadius: 6,
        height: 41,
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 17px 41px 0 rgba(84, 93, 107, 0.12)',
        backgroundColor: '#fff',
        fontSize: 14
    },
    uploadImageInput: {
        display: 'none',
    },
    currentUpload: {
        marginBottom: 40,
        fontSize: 12,
        cursor: 'pointer',
        width: 220,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#2874f0',

        '&:hover': {
            borderRadius: 7,
        }
    },
    selectedImages: {
        marginTop: 80
    }
});

export default memo(SidebarSwitcher);