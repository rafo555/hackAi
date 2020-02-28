import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';

import { templates } from './data';

const Templates = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <p className={classes.heading}>Choose The Template</p>
            <div className={classes.mainContainerDiv}>
                {templates.map((el) => {
                    return (
                        <div key={el.id} className={classes.templateImgClass}>
                            <img alt='img' className={classes.templateImg} src={el.url}/>
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
    heading: {
        marginLeft: 37
    },
    mainContainerDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 50,
        flexDirection: 'row',
        marginLeft: 37,
    },
    templateImgClass: {
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        marginRight: 37,
        backgroundColor: 'white'
    },
    templateImg: {
        borderRadius: 12,
        cursor: 'pointer',
        width: 340,
        height: 353
    }
});

export default memo(Templates);