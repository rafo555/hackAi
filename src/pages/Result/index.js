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
                        key={`result_${el.id}`}
                        className={classes.resultDiv}>
                        <img
                            src={el.url}
                            alt=""
                            className={classes.resultImg}/>
                    </div>)
            })}
        </div>
    );
};

const useStyles = createUseStyles({
    result: {
        marginRight: 150
    },
    resultDiv: {
        width: 240,
        height: 250,
        float: 'left',
        marginLeft: 20,
        marginTop: 20
    },
    resultImg: {
        width: 240,
        height: 250,
        objectFit: 'cover',
    }

});

export default memo(Result);