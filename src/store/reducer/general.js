// import cloneDeep from 'lodash/cloneDeep';

import { helpers } from '../helpers';

import {
    TEST,
    CHANGE_TEMPLATES_SIDEBAR,
    CHANGE_IMAGES_SIDEBAR
} from '../actionTypes';

const defaultState = {
    test: 'test',
    activeTemplatesSideBar: 'effects',
    activeImageSidebar: 'freeToEdit'
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
    }

});

export default reducer;