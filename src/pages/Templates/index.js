import React, { memo, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { templates } from './data';
import { SET_TEMPLATE_TYPE } from '../../store/actionTypes';
import { useHistory } from "react-router-dom";

const Templates = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const history = useHistory();

    const handleTemplateClick = useCallback((type) => {
        dispatch({
            type: SET_TEMPLATE_TYPE,
            template_type: type
        });

        history.push("/images");
    }, [dispatch, history]);

    return (
        <div className={classes.mainContainer}>
            <div className={classes.mainContainerDiv}>
                {templates.map((el) => {
                    return (
                        <div key={el.id} className={classes.outlineDiv}>
                            <div className={classes.templateImgClass}>
                                <img
                                    width={390}
                                    height={390}
                                    alt='img'
                                    className={classes.templateImg}
                                    src={el.url}
                                    onClick={() => handleTemplateClick(el.type)}
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
        // marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        transform: 'scale(1)',
        transition: 'all 0.5s',
        '&:hover': {
            transform: 'scale(1.05)',
        }
    },
    outlineDiv: {
        // marginRight: 20,
        // marginBottom: 20,
        backgroundColor: 'white',
        width: 400,
        height: 400,
        marginLeft: 5,

        '&:hover': {
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