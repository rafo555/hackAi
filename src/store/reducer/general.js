// import cloneDeep from 'lodash/cloneDeep';

import { helpers } from '../helpers';

import {
    TEST
} from '../actionTypes';

const defaultState = {
    test: 'test'
};

const reducer = helpers(defaultState, {
    [TEST]: (state, action) => {
        return {
            ...state,
            test: action.test2
        };
    },
});

export default reducer;