import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { templates } from './data';

const Templates = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainerDiv}>
            {templates.map((el) => {
                return (
                    <div key={el.id} className={classes.templateImgClass}>
                        <img alt='img' className={classes.templateImg} src={el.url}/>
                    </div>
                )
            })}
        </div>
    );
};

const useStyles = createUseStyles({
    mainContainerDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 35,
        marginRight: 35
    },
    templateImgClass: {
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        marginRight: 15,
        backgroundColor: 'white'
    },
    templateImg: {
        borderRadius: 10,
        cursor: 'pointer',
        width: 180,
        height: 180
    }
});

export default memo(Templates);