import React, {memo, useCallback} from 'react';
import {useHistory, Link} from "react-router-dom";

import {createUseStyles} from 'react-jss';
import PicsArtLogo from '../../../../src/assets/PicsArt.svg';
import back from '../../../assets/svg/back.svg';
import {useDispatch} from "react-redux";
import {CHANGE_REFIN} from "../../../store/actionTypes";
import {useSelector} from "../../../store/helpers";
import isEqual from "react-fast-compare";

const Header = ({page}) => {
    const classes = useStyles();

    const history = useHistory();
    const dispatch = useDispatch();

    const {changeRefine} = useSelector((state) => {
        return {
            changeRefine: state.general.changeRefine
        };
    }, isEqual);

    const handleBackClick = useCallback(() => {
        history.goBack();
    }, [history]);
    const downloadImagesToZip = useCallback(async () => {
        const JSZip = require("jszip");
        const zip = new JSZip();
        const img = zip.folder("images");
        for (let i = 0; i < window.stageArray.length; i++) {
            const imageData = window.stageArray[i].toDataURL();
            const basePic = imageData.replace(/^data:image\/(png|jpg);base64,/, "");
            img.file(`image${i}.jpg`, basePic, {base64: true});
        }
        zip.generateAsync({type: "blob"})
            .then(function (content) {
                const FileSaver = require('file-saver');
                FileSaver.saveAs(content, "templateBulk.zip");
            });
    }, []);

    const changeRefineHandle = useCallback(() => {
        dispatch({
            type: CHANGE_REFIN,
            changeRefine: true
        })
    }, [dispatch]);

    return (
        <>
            {!changeRefine ? (
                <>
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
                                <img src={back} className={classes.backIcon} alt='img'/>
                                Back
                            </div>

                            {page === 'results' ? (
                                <div className={classes.resultButtons}>
                                    {/*<Link to={'/editor'} style={{ textDecoration: 'none'}}>*/}
                                    <div
                                        className={classes.refine}
                                        onClick={changeRefineHandle}>
                                        <p>Refine</p>
                                    </div>
                                    {/*</Link>*/}

                                    <div className={classes.share}>
                                        <p>Share</p>
                                    </div>
                                    <div
                                        className={classes.download}
                                        onClick={downloadImagesToZip}
                                    >
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
                </>) : <></>}
        </>
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
        marginLeft: 73,
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
        marginRight: 73,
        cursor: 'pointer',
        fontSize: 14,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',

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
        cursor: 'pointer',
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