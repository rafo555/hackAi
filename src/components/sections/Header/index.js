import React, { memo, useCallback } from 'react';
import { useHistory } from "react-router-dom";

import {createUseStyles} from 'react-jss';
import PicsArtLogo from '../../../../src/assets/PicsArt.svg';
import back from '../../../assets/svg/back.svg';

const Header = ({page}) => {
    const classes = useStyles();

    const history = useHistory();

    const handleBackClick = useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <div className={classes.header}>
            {page === 'templates' ? (
                <>
                    <div className={classes.headerBack}>
                        <img alt={'img'} src={PicsArtLogo}/>
                    </div>

                </>
            ) : (<>
                <div
                    className={classes.headerBack}
                    onClick={handleBackClick}>
                    <img src={back} className={classes.backIcon} alt='img' />
                    Back
                </div>

                <div className={classes.headerNext}>
                    Next
                    <img src={back} className={classes.nextIcon} alt='img'/>
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
    backIcon: {
        marginRight: 10,
        width: 13,
        height: 13,
        cursor: 'pointer',

        '&:hover': {
            color: '#2874f0',
        }
    },
    nextIcon: {
        transform: 'scaleX(-1)',
        marginLeft: 10,
        width: 13,
        height: 13,
        cursor: 'pointer',
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