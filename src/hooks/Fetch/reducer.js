import {
    FETCH_INIT, FETCH_SUCCESS, FETCH_FAILED, FETCH_RESET
} from './actionTypes';

const defaultState = {
    isLoading: false,
    isError: false,
    nextUrl: '',
    data: []
};

const reducer = (state, action) => {

    switch (action.type) {

        case FETCH_INIT:
            return {
                ...state,
                isLoading: true,
                isError: false
            };
        case FETCH_SUCCESS:
            const {data} = state;

            if (!action.data) {
                return state;
            }

            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.is_remove_old_data ? action.data : [...data, ...action.data],
                nextUrl: action.nextUrl
            };
        case FETCH_FAILED:
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case FETCH_RESET:
            return defaultState;
        default:
            return state;
    }
};

export { reducer, defaultState };