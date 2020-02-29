import React, { memo, useCallback } from 'react';
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";

import {templates} from "../Templates/data";
import template from '../../assets/svg/template.svg';
import text from '../../assets/svg/text.svg';
import shape from '../../assets/svg/shape.svg';
import canvas from '../../assets/svg/canvas.svg';
import font from '../../assets/svg/font.svg';
import color from '../../assets/svg/color.svg';
import outline from '../../assets/svg/text.svg';
import shadow from '../../assets/svg/shadow.svg';

const Editor = () => {

    const classes = useStyles();

    const history = useHistory();

    const handleCancel = useCallback(() => {
        history.goBack();
    }, [history]);

    return (
        <div className={classes. mainContainer}>
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
                            <p className={classes.names}>Font</p></div>
                        <div className={classes.firstSettings}>
                            <img src={color} alt='img' className={classes.icon}/>
                            <p className={classes.names}>Color</p></div>
                        <div className={classes.firstSettings}>
                            <img src={outline} alt='img' className={classes.icon}/>
                            <p className={classes.names}>Outline</p></div>
                        <div className={classes.firstSettings}>
                            <img src={shadow} alt='img' className={classes.icon}/>
                            <p className={classes.names}>Shadow</p></div>
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
                {templates.map(el => {
                    return (
                        <div key={el.id} className={classes.layerImgDiv}>
                            <img
                                width={59.3}
                                height={54.3}
                                alt='img'
                                className={classes.layerImg}
                                src={el.url}
                            />
                        </div>
                    )
                })}
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
        width: 82.5,
        cursor: 'pointer',
        height: 82.5,
        textAlign: 'center',
        paddingTop: 15,
        fontSize: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    names: {
        fontSize: 16,
        marginTop: 22
    },
    icons: {
        width: 84,
        height: 20,
        marginBottom: 7,
        marginTop: 30
    },
    leftAside: {
        float: 'right',
        width: 307.3,
        height: '100vh',
        backgroundColor: 'black'
    },
    firstSettings: {
        marginBottom: 10,
        marginTop: 26,
        width: 280,
        height: 64,
        color: 'white',
        backgroundColor: '#1d2025',
        display: 'flex'
    },
    icon: {
         float: 'left',
        marginRight: 26,
        marginLeft:16
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