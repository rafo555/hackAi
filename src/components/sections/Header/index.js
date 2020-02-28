import React, { memo } from 'react';

import { createUseStyles } from 'react-jss';
import PicsArtLogo from '../../../../src/assets/PicsArt.svg';

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <div className={classes.headerBack}>
                <img alt={'img'} src={PicsArtLogo}/>
            </div>

            <div className={classes.headerNext}>
                <div className={classes.logIn}>Log In</div>
                <div className={ classes.singUp}>Sign Up</div>
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
        marginTop: 14,
        marginLeft: 40
    },
    headerNext: {
        marginTop: 18,
        marginRight: 40,
        display: 'flex'
    },
    logIn: {
        width: 80,
        height: 27,
        fontSize: 14,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    singUp: {
        width: 80,
        height: 27,
        borderRadius: 4,
        border: 'solid 1px #000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 14
    }
//     width: 106px;
//   height: 44px;
//   border-radius: 4px;
//   border: solid 1px #000000;
});

export default memo(Header);