import React, {memo} from 'react';

import {createUseStyles} from 'react-jss';
import PicsArtLogo from '../../../../src/assets/PicsArt.svg';

const Header = ({page}) => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            {page === 'templates' ? (
                <>
                    <div className={classes.headerBack}>
                        <img alt={'img'} src={PicsArtLogo}/>
                    </div>

                </>
            ) : (<>
                <div className={classes.headerBack}>
                    Back
                </div>

                <div className={classes.headerNext}>
                    Next
                </div>
            </>)}

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
        marginLeft: 40,
        cursor: 'pointer',
        fontSize: 14,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
            color: '#2874f0',
        }
    },
    headerNext: {
        marginRight: 40,
        cursor: 'pointer',
        fontSize: 14,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
            color: '#2874f0',
        }
    },
    logIn: {
        width: 80,
        height: 27,
        fontSize: 12,
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
        fontSize: 12
    }
//     width: 106px;
//   height: 44px;
//   border-radius: 4px;
//   border: solid 1px #000000;
});

export default memo(Header);