import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
// import FreeToEdit from "../../components/common/FreeToEdit";
// import Upload from "../../components/common/Upload";
import Selected from "../../components/common/Selected";

const Images = () => {
    const classes = useStyles();

    return (
        <div className={classes.images}>

            {/*Images*/}
            <Selected />
            {/*<FreeToEdit />*/}

        </div>
    );
};

const useStyles = createUseStyles({
    images: {

    }
});

export default memo(Images);