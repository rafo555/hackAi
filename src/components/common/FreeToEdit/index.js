import React from 'react';
import { createUseStyles } from 'react-jss';

import { data } from './data';

const FreeToEdit = () => {

    const classes = useStyles();

    const selectImage = () => {

    };

    return (
        <div className={classes.fteContainer}>
            <div className={classes.fteSearch}>
                <input className={classes.fteSearch} placeholder={'Search free images'}/>
            </div>
        <div className={classes.gridContainer}>
            {data.map((el) => {
                return (
                    <div className={classes.freeToEditimageContainer}>
                        <img alt='img'
                             className={classes.freeToEditimage} src={el.url}
                             onClick={() => selectImage()}
                        />
                    </div>
                )
            })}
        </div>
        </div>
    );
};

const useStyles = createUseStyles({
    fteSearch: {
        color: '#708099',
        height: 35,
        outline: 'none',
        fontSize: 15,
        width: '80%'
    },
    fteContainer: {
        padding: '28px 35px',
        boxShadow: '0 19px 37px 0 #e6ebf4',
        borderRadius: 4.7,
        backgroundColor: 'white'
    },
    gridContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 30,
        justifyContent: 'space-between',
    },
    freeToEditimageContainer: {
        width: 250,
        height: 250,
        marginBottom: 10,
        marginRight: 10
    },
    freeToEditimage: {
        width: '100%',
        cursor: 'pointer',
        objectFit: 'cover',
        borderRadius: 7
    }
});

export default FreeToEdit;