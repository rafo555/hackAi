import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';

const Images = () => {
    const classes = useStyles();

    return (
        <div className={classes.images}>

            Images

        </div>
    );
};

const useStyles = createUseStyles({
    images: {

    }
});

export default memo(Images);