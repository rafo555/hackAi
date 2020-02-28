import React, { memo } from 'react';
import { createUseStyles } from "react-jss";

import {templates} from "../Templates/data";

const Editor = () => {

    const classes = useStyles();

    return (
        <div>
            <aside className={classes.leftAside}>
                left
            </aside>

            <aside className={classes.rightAside}>
                <p className={classes.rightSideTxt}>Images</p>
                {templates.map(el => {
                    return (
                        <div key={el.id} className={classes.layerImgDiv}>
                            <img
                                width={89}
                                height={82}
                                alt='img'
                                className={classes.layerImg}
                                src={el.url}
                            />
                        </div>
                    )
                })}
            </aside>

            <main>
                <div>
                    <div className={classes.cancel}>
                        <p>Cancel</p>
                    </div>

                    <div className={classes.apply}>
                        <p>Apply</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

const useStyles = createUseStyles({
    leftAside: {
        float: 'left',
        width: 300,
        height: '100vh'
    },
    rightAside: {
        float: 'right',
        width: 121,
        border: 'solid 1px #e8e8f1',
        height: '100vh'
    },
    rightSideTxt: {
        marginTop: 32,
        textAlign: 'center',
        color: '#9ba0ae'
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
        borderRadius: 4
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