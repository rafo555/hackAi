import React from 'react';
import { createUseStyles } from 'react-jss';

import {useSelector} from "../../../store/helpers";
import isEqual from "react-fast-compare";

const Selected = () => {
    const classes = useStyles();

    const {template_data} = useSelector((state) => {
        return {
            template_data: state.general.template_data,
        };
    }, isEqual);

    return (
        <div className={classes.selectedImages}>
            {template_data.map((el) => {
                return (
                    <div
                        className={classes.selectedContainer}
                        key={`${el.id}`}
                    >
                        <img
                            alt='img'
                             className={classes.selectedImage} src={el.url}
                        />
                    </div>
                )
            })}
        </div>
    );
};

const useStyles = createUseStyles({
    selectedImages: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: 30,
    },
    selectedContainer: {
        width: 150,
        height: 150,
        marginBottom: 10,
        marginRight: 10
    },
    selectedImage: {
        width: 150,
        height: 150,
        cursor: 'pointer',
        objectFit: 'cover',
        borderRadius: 7,
    }
});

export default Selected;