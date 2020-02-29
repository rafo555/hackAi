import React, {memo} from 'react';
import {createUseStyles} from 'react-jss';
import isEqual from "react-fast-compare";
import {useSelector} from '../../store/helpers';
import RgRemove from './bgremove';
import Ilustratr from './ilustrater';
import Editor from "../Editor";


const Result = () => {
    const {templateType, templateData = [], changeRefine} = useSelector((state) => {
        return {
            templateType: state.general.template_type,
            templateData: state.general.template_data,
            changeRefine: state.general.changeRefine
        };
    }, isEqual);

    const classes = useStyles();
    let Component = null;
    switch (templateType) {
        case 'bg':
            Component = RgRemove;
            break;
        case 'lu':
            Component = Ilustratr;
            break;
        default:
            break;
    }

    return (
        <>
            <div
                className={classes.result}
                style={{display: changeRefine ? 'none' : 'block'}}>
                <Component imagesSrc={templateData}/>
            </div>
            {changeRefine ? <Editor/> : <></>}

        </>
    );
};

const useStyles = createUseStyles({
    result: {
        marginRight: 150,
        height: `calc(100vh - 40px)`,
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