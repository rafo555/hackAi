import React, { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { createUseStyles } from 'react-jss';

import useFetch from '../../../hooks/Fetch';
import classNames from 'classnames';
// import selectedIcon from '../../../assets/svg/selected.png';


import { PHOTO_SEARCH_URL } from '../../../configs';

const FreeToEdit = () => {
    const classes = useStyles();

    const [{ data, nextUrl, isLoading, isError }, passNextURL] = useFetch();

    const [activeIndex, setAtiveIndex] = useState([-1]);

    useEffect(() => {
        passNextURL(`${PHOTO_SEARCH_URL}?q=origfte`, { is_remove_old_data: false });
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

        passNextURL(`${PHOTO_SEARCH_URL}?q=${e.target.value}&freetoedit=1`, { is_remove_old_data: true });
    }, [passNextURL]);



    const selectImage = useCallback((index) => {

        if (activeIndex.includes(index)) {
            const newArray = activeIndex.filter(el => el !== index);
            return setaAtiveIndex([...newArray])([...newArray]);
        }

        setaAtiveIndex([...newArray])([...activeIndex, index]);
]    }, [activeIndex]);

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
                    // onChange={(e) => setPhotoSearchValue(e.target.value)}
                    // style={{ width: gridSize * 2 + 16 }}
                    // value={photoSearchValue}
                />
            </div>

            <div className={classes.gridContainer}>
                {photoData.map(el => {
                    return (
                        <div key={el.id} className={classes.freeToEditimageContainer}>
                            <img alt='img'
                                 width={250}
                                 height={250}
                                 className={classNames(classes.freeToEditimage, {
                                     [classes.selectedfreeToEditimage]: activeIndex.includes(el.id)
                                 })}
                                 src={`${el.url}?r240x240`}
                                 onClick={() => selectImage(el.id)}
                            />
                        </div>
                    )
                })}
            </div>

            {isLoading && (
                <div style={{ textAlign: 'center' }}>
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
        borderRadius: 7,
        marginBottom: 10,
        marginRight: 10,
    },
    selectedfreeToEditimage: {
        marginBottom: 4,
        marginRight: 4,
        borderRadius: 20,
        border: 'solid 3px blue',
        backgroundColor: '#d6e8fa',
    }
});

export default FreeToEdit;