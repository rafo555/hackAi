import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { templates } from './data';

const Templates = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainContainerDiv}>
                {templates.map((el) => {
                    return (
                        <div key={el.id} className={classes.templateImgClass}>
                            <img width={200} height={220} alt='img' className={classes.templateImg} src={el.url}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

const useStyles = createUseStyles({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    mainContainerDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 29,
        flexDirection: 'row',
        marginLeft: 37,
    },
    templateImgClass: {
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        marginRight: 20,
        backgroundColor: 'white'
    },
    templateImg: {
        borderRadius: 12,
        cursor: 'pointer'
    }
});

export default memo(Templates);