// import cloneDeep from 'lodash/cloneDeep';

import { helpers } from '../helpers';

import {
    TEST,
    CHANGE_TEMPLATES_SIDEBAR,
    CHANGE_IMAGES_SIDEBAR,
    SET_TEMPLATE_TYPE,
    ADD_CHOOSE_IMAGE,
    TEMPLATE_DATA_COUNT,
    ADD_STAGE_POINTERS,
    CHOOSE_IMAGE
} from '../actionTypes';

const defaultState = {
    test: 'test',
    activeTemplatesSideBar: 'effects',
    activeImageSidebar: 'selected',
    template_type: 'bg',
    template_data: [],
    template_data_count: 0,
    stages: []
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
        const template_data = state.template_data;
        template_data.push(action.imageObject);

        return {
            ...state,
            template_data
        };
    },
    [TEMPLATE_DATA_COUNT]: (state, action) => {
        return {
            ...state,
            template_data_count: action.template_data_count
        };
    },
    [ADD_STAGE_POINTERS]: (state, action) => {
        return {
            ...state,
            stages: action.payload
        };
    },
    [CHOOSE_IMAGE]: (state, action) => {
        let template_data = state.template_data;
        template_data = [...template_data, ...action.data ];

        return {
            ...state,
            template_data,
            template_data_count: state.template_data_count + 1
        };
    },
});

export default reducer;