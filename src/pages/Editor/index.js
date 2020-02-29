import React, { memo, useCallback } from 'react';
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";

import template from '../../assets/svg/template.svg';
import text from '../../assets/svg/text.svg';
import shape from '../../assets/svg/shape.svg';
import canvas from '../../assets/svg/canvas.svg';
import font from '../../assets/svg/font.svg';
import color from '../../assets/svg/color.svg';
import outline from '../../assets/svg/text.svg';
import shadow from '../../assets/svg/shadow.svg';
import {useDispatch} from "react-redux";
import {CHANGE_REFIN} from "../../store/actionTypes";
import openSetting from '../../assets/svg/openSetting.svg'

const Editor = () => {

    const classes = useStyles();

    const history = useHistory();
    const dispatch = useDispatch();

    const handleCancel = useCallback(() => {
        history.goBack();

        dispatch({
            type: CHANGE_REFIN,
            changeRefine: false
        })
    }, [history, dispatch]);

    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainLeft}>
                <div className={classes.firstPart}>
                    <div className={classes.templates}>
                        <img src={template} className={classes.icons} alt='img'/>
                        Templates
                    </div>
                    <div className={classes.templates}>
                        <img src={text} className={classes.icons} alt='img'/>
                        Text
                    </div>
                    <div className={classes.templates}>
                        <img src={shape} className={classes.icons} alt='img'/>
                        Shape
                    </div>
                    <div className={classes.templates}>
                        <img src={canvas} className={classes.icons} alt='img'/>
                        Canvas
                    </div>
                </div>

                <div className={classes.leftAside}>
                    left
                    <div className={classes.topSettings}>
                        <div className={classes.firstSettings}>
                            <img src={font} alt='img' className={classes.icon}/>
                            <p className={classes.names}>Font</p>
                            <img src={openSetting} alt='img' className={classes.openSetting}/>
                        </div>
                        <div className={classes.firstSettings}>
                            <img src={color} alt='img' className={classes.icon}/>
                            <p className={classes.names}>Color</p>
                            <img src={openSetting} alt='img' className={classes.openSetting}/>
                        </div>
                        <div className={classes.firstSettings}>
                            <img src={outline} alt='img' className={classes.icon}/>
                            <p className={classes.names}>Outline</p>
                            <img src={openSetting} alt='img' className={classes.openSetting}/>
                        </div>
                        <div className={classes.firstSettings}>
                            <img src={shadow} alt='img' className={classes.icon}/>
                            <p className={classes.names}>Shadow</p>
                            <img src={openSetting} alt='img' className={classes.openSetting}/>
                        </div>
                    </div>

                    <div className={classes.colorPicker}>
                        <div className={classes.whiteIcon}/>
                        <input type={text} className={classes.hexInput}/>
                    </div>


                    <div>
                        <div className={classes.sliders}>
                            <p className={classes.sliderName}>Opacity</p>
                            <input type='range' min='1' max='100' value='50' className={classes.slider}/>
                        </div>
                        <div className={classes.sliders}>
                            <p className={classes.sliderName}>X Offset</p>
                            <input type='range' min='1' max='100' value='50' className={classes.slider}/>
                        </div>
                        <div className={classes.sliders}>
                            <p className={classes.sliderName}>Y Offset</p>
                            <input type='range' min='1' max='100' value='50' className={classes.slider}/>
                        </div>
                        <div className={classes.sliders}>
                            <p className={classes.sliderName}>Blur/Depth</p>
                            <input type='range' min='1' max='100' value='50' className={classes.slider}/>
                        </div>
                        <div className={classes.sliders}>
                            <p className={classes.sliderName}>Spread/Size</p>
                            <input type='range' min='1' max='100' value='50' className={classes.slider}/>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <div>
                    <div className={classes.cancel} onClick={handleCancel}>
                        <p>Cancel</p>
                    </div>

                    <div className={classes.apply}>
                        <p>Apply</p>
                    </div>
                </div>
            </main>

            <aside className={classes.rightAside}>
                <p className={classes.rightSideTxt}>Images</p>
                {/*{window.stageArray.map((el, index) => {*/}
                    return (
                        {/*<div key={`stage_canvas_${index}`} className={classes.layerImgDiv}>*/}
                            <img
                                width={59.3}
                                height={54.3}
                                alt='img'
                                className={classes.layerImg}
                                // src={el.toDataURL()}
                            />
                        {/*</div>*/}
                    )
                {/*})}*/}
            </aside>
        </div>
    )
}

const useStyles = createUseStyles({
    mainLeft: {
        float: 'left',
    },
    firstPart: {
        backgroundColor: 'black',
        color: 'white',
        height: '100vh',
        float: 'left'
    },
    templates: {
        width: 70,
        cursor: 'pointer',
        height: 70,
        fontSize: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    names: {
        fontSize: 13,
        marginTop: 16,
        marginRight: 10
    },
    slider: {
        width: 252,
        marginLeft: 9
    },
    sliderName: {
        color: 'white',
        fontSize: 15.7,
        marginBottom: 10,
        marginLeft: 9
    },
    colorPicker: {
        display:'flex',
        flexDirection:'row'
    },
    icons: {
        width: 84,
        height: 20,
        marginBottom: 7,
        marginTop: 30
    },
    leftAside: {
        float: 'right',
        width: 280,
        height: '100vh',
        backgroundColor: 'black',
        paddingTop: 22
    },
    whiteIcon: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        marginRight:9,
        borderRadius: 4.3,
        marginLeft: 9
    },
    hexInput: {
        width:204,
        height: 40,
        borderRadius: 4.3,
        backgroundColor: 'black',
        border: 'solid 0.7px #303139'
},
    firstSettings: {
        marginBottom: 10,
        marginLeft: 7,
        width: 259,
        height: 49,
        color: 'white',
        backgroundColor: '#1d2025',
        display: 'flex',
        cursor: 'pointer',
        borderRadius: 4.3
    },
    sliders: {
        display: 'flex',
        flexDirection: 'column',

    },
    icon: {
        marginRight: 23,
        marginLeft: 12,
        width: 17
    },
    openSetting: {
        display: 'flex',
        flexDirection: 'end',
    },
    rightAside: {
        float: 'right',
        width: 86.8,
        border: 'solid 1px #e8e8f1',
        height: '100vh'
    },
    rightSideTxt: {
        textAlign: 'center',
        color: '#9ba0ae',
        fontSize: 13,
        display: 'flex',
        justifyContent: 'center'
},
    layerImgDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 8,
        marginRight: 14,
        marginLeft: 14
    },
    layerImg: {
        borderRadius: 3,
        cursor: 'pointer'
    },
    main: {
        marginLeft: 300,
        marginRight: 50
    },
    cancel: {
        width: 100,
        height: 36,
        borderRadius: 4,
        backgroundColor: '#818ca0',
        color: '#fff',
        fontSize: 13,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginRight: 10,
        cursor: 'pointer',
        float: 'left'
    },
    apply: {
        width: 100,
        height: 36,
        borderRadius: 4,
        backgroundColor: '#3a76e8',
        color: '#fff',
        fontSize: 13,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginRight: 10,
        cursor: 'pointer',
        float: 'left'
    }
});

export default memo(Editor);