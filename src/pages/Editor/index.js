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
                {templates.map((el) => {
                    return (
                        <div className={classes.layerImgDiv}>
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
                main
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
    }

});

export default memo(Editor);