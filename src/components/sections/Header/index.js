import React, { memo } from 'react';

import { createUseStyles } from 'react-jss';

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.headerBack}>
                Back
            </div>

            <div className={classes.headerNext}>
                Next
            </div>
        </div>
    );
};

const useStyles = createUseStyles({
    header: {
        height: 60,
        borderBottom: '0.5px solid #e8e8f1',
        display: 'flex',
        justifyContent: 'space-between'
    },
    headerBack: {
        marginTop: 20,
        marginLeft: 40
    },
    headerNext: {
        marginTop: 20,
        marginRight: 40
    }
});

export default memo(Header);