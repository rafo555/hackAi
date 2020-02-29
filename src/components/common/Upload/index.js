import React, { useCallback, memo } from 'react';
import { createUseStyles } from 'react-jss';
import uploadImageSVG from '../../../assets/svg/photo.svg';
import { readDropDownFile } from '../../../utils';

import { useDispatch } from 'react-redux';
import { CHOOSE_IMAGE } from "../../../store/actionTypes";

const Upload = () => {

    const classes = useStyles();

    const dispatch = useDispatch();

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
    }, []);

    return (
        <>
            <label htmlFor={'input'}>
            <div
                className={classes.uploadContainer}
            >
                <img src={uploadImageSVG} className={classes.uploadImageSVG} alt={'img'}/>
                <div className={classes.uploadImageText}>
                    <div> No Images are selected.</div>
                    <div>Please Upload images to proceed.</div>
                </div>
                <input
                    id={'input'}
                    type={'file'}
                    className={classes.uploadImageInput}
                    accept={'image/jpeg, image/png'}
                    multiple={true}
                    onChange={uploadImage}/>
            </div>
            </label>
        </>

    );
};

const useStyles = createUseStyles({
    uploadImageInput: {
        display: 'none',
    },
    uploadImageText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#cad3e3',
    },
    uploadContainer: {
        top: '50%',
        position: 'absolute',
        left: '50%',
        marginTop: -75,
        marginLeft: -75,
        textAlign: 'center',
        cursor: 'pointer'
    },
    uploadImageSVG: {
        width: 150,
        height: 150
    },
});

export default memo(Upload);