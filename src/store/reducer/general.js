// import cloneDeep from 'lodash/cloneDeep';

import { helpers } from '../helpers';

import {
    TEST,
    CHANGE_TEMPLATES_SIDEBAR,
    CHANGE_IMAGES_SIDEBAR,
    SET_TEMPLATE_TYPE,
    ADD_CHOOSE_IMAGE,
    TEMPLATE_DATA_COUNT
} from '../actionTypes';

const defaultState = {
    test: 'test',
    activeTemplatesSideBar: 'effects',
    activeImageSidebar: 'selected',
    template_type: 'bg',
    template_data: [],
    template_data_count: 0
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
    [ADD_CHOOSE_IMAGE]: (state, action) => {
        const new_template_data = state.template_data;
        new_template_data.push(action.imageObject);

        return {
            ...state,
            new_template_data
        };
    },
    [TEMPLATE_DATA_COUNT]: (state, action) => {

        return {
            ...state,
            template_data_count: action.template_data_count
        };
    },
    // [_CHOOSE_IMAGE]: (state, action) => {
    //     const new_template_data = state.template_data;
    //     new_template_data.push(action.imageObject);
    //
    //     return {
    //         ...state,
    //         new_template_data
    //     };
    // },
});

export default reducer;