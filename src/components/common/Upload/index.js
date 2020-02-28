import React from 'react';
import { createUseStyles } from 'react-jss';
import uploadImage from '../../../assets/svg/photo.svg'

const Upload = () => {

    const classes = useStyles();

    return (
        <div className={classes.uploadContainer}>
            <img src={uploadImage} className={classes.uploadImageSVG} alt={'img'}/>
            <div className={classes.uploadImageText}>
                <div> No Images are selected.</div>
                <div>Please Upload images to proceed.</div>
            </div>
        </div>
    );
};

const useStyles = createUseStyles({
    uploadImageText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#cad3e3',
        marginLeft: -50,
    },
    uploadContainer: {
        top: '50%',
        position: 'absolute',
        left: '50%',
        marginTop: -75,
        marginLeft: -75,
        textAlign: 'center'
    },
    uploadImageSVG: {
        width: 150,
        height: 150
    },
});

export default Upload;