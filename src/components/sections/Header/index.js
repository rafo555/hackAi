import React, { memo } from 'react';

import { createUseStyles } from 'react-jss';

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes}>
                Back
            </div>

            <div>
                Next
            </div>
        </div>
    );
};

const useStyles = createUseStyles({
    header: {
        height: 60,
        borderBottom: '0.5px solid #e8e8f1',
    }
});

export default memo(Header);