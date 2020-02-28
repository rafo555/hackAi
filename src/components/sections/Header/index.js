import React, { memo, useCallback } from 'react';
import { useHistory, Link } from "react-router-dom";

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
        <header className={classes.header}>
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

                {page === 'results' ? (
                    <div className={classes.resultButtons}>
                        <div className={classes.refine}>
                            <p>Refine</p>
                        </div>
                        <div className={classes.share}>
                            <p>Share</p>
                        </div>
                        <div className={classes.download}>
                            <p>Download</p>
                        </div>
                    </div>) : (<>
                    <div className={classes.headerNext}>
                        <Link to={'/results'}>
                            Next
                            <img src={back} className={classes.nextIcon} alt='img'/>
                        </Link>
                    </div>
                </>)}
            </>)}

        </header>
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
    },
    resultButtons: {
        display: 'flex'
    },
    refine: {
        width: 100,
        height: 40,
        borderRadius: 4,
        border: 'solid 1px rgba(84, 93, 107, 0.29)',
        backgroundColor: '#fff',
        color: '#3a76e8',
        fontSize: 13,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginRight: 10,
        cursor: 'pointer'
    },
    share: {
        width: 120,
        height: 40,
        borderRadius: 4,
        backgroundColor: '#818ca0',
        color: '#fff',
        fontSize: 13,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginRight: 10,
        cursor: 'pointer'
    },
    download: {
        width: 120,
        height: 40,
        borderRadius: 4,
        backgroundColor: '#3a76e8',
        color: '#fff',
        fontSize: 13,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginRight: 10,
        cursor: 'pointer'
    },
});

export default memo(Header);