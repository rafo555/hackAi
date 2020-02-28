import React, {memo} from 'react';
import {createUseStyles} from 'react-jss';
import {resultData} from './data';

const Result = () => {
    const classes = useStyles();

    return (
        <div className={classes.result}>
            {resultData.map(el => {
                return (
                    <div
                        key={`result_${el.id}`}>
                        <img src={el.url} alt=""/>
                    </div>)
            })}
        </div>
    );
};

const useStyles = createUseStyles({});

export default memo(Result);