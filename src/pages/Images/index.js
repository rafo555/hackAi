import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import FreeToEdit from "../../components/common/FreeToEdit";

const Images = () => {
    const classes = useStyles();

    return (
        <div className={classes.images}>

            Images
            <FreeToEdit/>

        </div>
    );
};

const useStyles = createUseStyles({
    images: {

    }
});

export default memo(Images);