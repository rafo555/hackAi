import React, {useCallback, useEffect, useState} from 'react';
import debounce from 'lodash/debounce';
import {createUseStyles} from 'react-jss';

import useFetch from '../../../hooks/Fetch';
import classNames from 'classnames';
import selectedIcon from '../../../assets/svg/select.png';


import {PHOTO_SEARCH_URL} from '../../../configs';
import {useDispatch} from "react-redux";
import {ADD_CHOOSE_IMAGE, TEMPLATE_DATA_COUNT} from "../../../store/actionTypes";
import {useSelector} from "../../../store/helpers";
import isEqual from "react-fast-compare";

const FreeToEdit = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [{data, nextUrl, isLoading, isError}, passNextURL] = useFetch();

    const [activeIndex, setAtiveIndex] = useState([-1]);

    const {template_data} = useSelector((state) => {
        return {
            template_data: state.general.template_data,
        };
    }, isEqual);

    useEffect(() => {
        passNextURL(`${PHOTO_SEARCH_URL}?q=origfte,people,person`, {is_remove_old_data: false});
    }, [passNextURL]);

    const onScrollSearch = useCallback(() => {
        if (isLoading) {
            return;
        }

        if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight && nextUrl) {
            passNextURL(nextUrl);
        }
    }, [isLoading, passNextURL, nextUrl]);

    const debounceScroll = debounce(onScrollSearch, 500);

    useEffect(() => {
        window.addEventListener('scroll', debounceScroll);
        return () => {
            window.removeEventListener('scroll', debounceScroll);
        };
    }, [debounceScroll]);

    const handleChangeSearch = useCallback((e) => {
        if (e.keyCode !== 13) {
            return;
        }

        passNextURL(`${PHOTO_SEARCH_URL}?q=${e.target.value}&freetoedit=1`, {is_remove_old_data: true});
    }, [passNextURL]);


    const selectImage = useCallback((index, url) => {

        if (activeIndex.includes(index)) {
            const newArray = activeIndex.filter(el => el !== index);
            return setAtiveIndex([...newArray]);
        }

        setAtiveIndex([...activeIndex, index]);

        const id = `image_${Date.now().toString(36)}`;
        dispatch({
            type: ADD_CHOOSE_IMAGE,
            imageObject: {
                type: 'link',
                id,
                url: `${url}?r1024x1024`
            }
        });

        dispatch({
            type: TEMPLATE_DATA_COUNT,
            template_data_count: template_data.length
        })

    }, [activeIndex, dispatch, template_data.length]);

    const photoData = data.map(el => {
        return {
            id: el.id,
            url: el.url || el.preview_url
        };
    });

    return (
        <div className={classes.fteContainer}>
            <div className={classes.fteSearch}>
                <input
                    className={classes.fteSearchInput}
                    placeholder={'Search free images'}
                    onKeyDown={handleChangeSearch}
                />
            </div>

            <div className={classes.gridContainer}>
                {photoData.map(el => {
                    return (
                        <div key={`${el.id}`}
                             className={classNames(classes.freeToEditimageContainer, {
                                 [classes.selectedFTEContainer]: activeIndex.includes(el.id)
                             })}
                        >
                            <img alt='img'
                                 width={240}
                                 height={240}
                                 className={classNames(classes.freeToEditimage, {
                                     [classes.selectedfreeToEditimage]: activeIndex.includes(el.id)
                                 })}
                                 src={`${el.url}?r240x240`}
                                 onClick={() => selectImage(el.id, el.url)}
                            />
                            {activeIndex.includes(el.id) &&
                            <img src={selectedIcon} alt={''} className={classes.selectedIcon}/>}

                        </div>
                    )
                })}
            </div>

            {isLoading && (
                <div style={{textAlign: 'center'}}>
                    {/*<Loading/>*/}
                    Loading
                </div>
            )}

            {/*{isError && <Error/>}*/}
            {isError && <div>Error</div>}
        </div>
    );
};

const useStyles = createUseStyles({
    selectedFTEContainer: {
        border: 'solid 5px #a5caef',
        backgroundColor: '#d6e8fa',
        width: 240,
        height: 240
    },
    freeToEditimageContainer: {
        position: 'relative',
        borderRadius: 20,
        marginBottom: 10,
        marginRight: 10,
    },
    selectedIcon: {
        left: 20,
        bottom: 20,
        width: 30,
        height: 30,
        position: 'absolute',
    },
    fteSearchInput: {
        border: 'solid 1px #d5d4e3',
        borderRadius: 7,
        padding: 5,
        color: '#708099',
        height: 35,
        outline: 'none',
        fontSize: 15,
        width: '50%',
        display: 'flex',
        paddingLeft: 25,
        '&::placeholder': {
            fontSize: 16,
            color: '#dad9e7',
        }
    },
    fteContainer: {
        padding: '28px 35px',
        boxShadow: '0 19px 37px 0 #e6ebf4',
        borderRadius: 4.7,
        backgroundColor: 'white'
    },
    gridContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 30,
    },
    freeToEditimage: {
        cursor: 'pointer',
        objectFit: 'cover',
        marginBottom: 10,
        marginRight: 10,
        borderRadius: 20
    },
    selectedfreeToEditimage: {
        marginBottom: 4,
        marginRight: 4,
        borderRadius: 20,
        width: 220,
        textAlign: 'center',
        padding: 10,
        height: 220,
    }
});

export default FreeToEdit;