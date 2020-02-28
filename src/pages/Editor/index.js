import React, { memo } from 'react';
import { createUseStyles } from "react-jss";

const Editor = () => {

    const classes = useStyles();

    return (
        <div>
            <aside className={classes.leftAside}>
                left
            </aside>

            <aside className={classes.rightAside}>
                right
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
        width: 50,
        height: '100vh'
    },
    main: {
        marginLeft: 300,
        marginRight: 50
    }

});

export default memo(Editor);