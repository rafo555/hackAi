import React, {memo} from 'react';
import {createUseStyles} from 'react-jss';
import isEqual from "react-fast-compare";
import { useSelector } from '../../store/helpers';
import RgRemove from './bgremove';


const Result = () => {
    const { templateType, templateData = [] } = useSelector((state) => {
        return {
            templateType: state.general.template_type,
            templateData: state.general.template_data
        };
    }, isEqual);

    const classes = useStyles();
    let Component = null;
    switch (templateType) {
        case 'bg':
            Component = RgRemove;
            break;
        default:
            break;
    }

    return (
        <div className={classes.result}>
            <Component imagesSrc={templateData} />
        </div>
    );
};

const useStyles = createUseStyles({
    result: {
        marginRight: 150,
        height: `calc(100vh - 40px)`,
        overflow: 'auto'
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