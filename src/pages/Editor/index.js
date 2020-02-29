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
                    Templates</div>
                <div className={classes.templates}>
                    <img src={text} className={classes.icons} alt='img'/>
                    Text</div>
                <div className={classes.templates}>
                    <img src={shape} className={classes.icons} alt='img'/>
                    Shape</div>
                <div className={classes.templates}>
                    <img src={canvas} className={classes.icons} alt='img'/>
                    Canvas</div>

            </div>
            <div className={classes.leftAside}>
                left
                <div className={classes.topSettings}>
                <div className={classes.firstSettings}>
                    <img src={font} alt='img'/>
                    Font</div>
                <div className={classes.firstSettings}>
                    <img src={color} alt='img'/>
                    Color</div>
                <div className={classes.firstSettings}>
                    <img src={outline} alt='img'/>
                    Outline</div>
                <div className={classes.firstSettings}>
                    <img src={shadow} alt='img'/>
                    Shadow</div>
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
    // mainContainer:{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // },
    mainLeft: {
      float: 'left'
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
        marginLeft: 17
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