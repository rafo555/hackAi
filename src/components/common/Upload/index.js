import React from 'react';
import { createUseStyles } from 'react-jss';
import uploadImage from '../../../assets/svg/photo.svg'

const Upload = () => {

    const classes = useStyles();

    return (
        <div className={classes.uploadContainer}>
            <img src={uploadImage} className={classes.uploadImageSVG}/>
            <div className={classes.uploadImageText}>
                <p> No Images are selected.</p>
                <p>Please Upload images to proceed.</p>
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
    },
    uploadImageSVG: {
        width: 150,
        height: 150
    },
});

export default Upload;