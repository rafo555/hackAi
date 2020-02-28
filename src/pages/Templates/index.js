import React, { memo, useCallback } from 'react';
import { createUseStyles } from 'react-jss';

import { templates } from './data';

const Templates = () => {
    const classes = useStyles();

    const handleTemplateClick = useCallback(() => {

        console.log('r');

    }, []);

    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainContainerDiv}>
                {templates.map((el) => {
                    return (
                        <div key={el.id} className={classes.outlineDiv}>
                            <div className={classes.templateImgClass}>
                                <img
                                    width={200}
                                    height={220}
                                    alt='img'
                                    className={classes.templateImg}
                                    src={el.url}
                                    onClick={handleTemplateClick}
                                />
                            </div>
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
        backgroundColor: 'white',
        transform: 'scale(1)',
        transition: 'all 0.5s',
        '&:hover': {
            transform: 'scale(1.05)',
        }
    },

    outlineDiv: {
        marginRight: 20,
        marginBottom: 20,
        backgroundColor: 'white',
        width: 200,
        height: 220,

        '&:hover': {
            // outline: '3px solid #a5caef',
            borderRadius: 15,
        }
    },
    templateImg: {
        objectFit: 'cover',
        borderRadius: 12,
        cursor: 'pointer',
    }
});

export default memo(Templates);