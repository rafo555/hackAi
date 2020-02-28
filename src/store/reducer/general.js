// import cloneDeep from 'lodash/cloneDeep';

import { helpers } from '../helpers';

import {
    TEST,
    CHANGE_TEMPLATES_SIDEBAR,
    CHANGE_IMAGES_SIDEBAR,
    SET_TEMPLATE_TYPE
} from '../actionTypes';

const defaultState = {
    test: 'test',
    activeTemplatesSideBar: 'effects',
    activeImageSidebar: 'selected',
    template_type: 'bg',
    template_data: [{
        type: 'link',
        url: 'https://cdn130.picsart.com/320391060178201.jpg?r1024x1024'
    }, {
        type: 'link',
        url: 'https://cdn130.picsart.com/320391060178201.jpg?r1024x1024'
    }]
};

const reducer = helpers(defaultState, {
    [TEST]: (state, action) => {
        return {
            ...state,
            test: action.test2
        };
    },
    [CHANGE_TEMPLATES_SIDEBAR]: (state, action) => {
        return {
            ...state,
            activeTemplatesSideBar: action.activeTemplatesSideBar,
        }
    },
    [CHANGE_IMAGES_SIDEBAR]: (state, action) => {
        return {
            ...state,
            activeImageSidebar: action.activeImageSidebar,
        }
    },
    [SET_TEMPLATE_TYPE]: (state, action) => {
        return {
            ...state,
            template_type: action.template_type,
        }
    },

});

export default reducer;