// import cloneDeep from 'lodash/cloneDeep';

import { createReducer } from '../createReducer';

import {
    TEST
} from '../actionTypes';

const defaultState = {
    test: 'test'
};

const reducer = createReducer(defaultState, {
    [TEST]: (state, action) => {
        return {
            ...state,
            test: action.test2
        };
    },
});

export default reducer;