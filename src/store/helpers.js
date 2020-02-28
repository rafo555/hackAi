import { useSelector as useSelectorGeneric } from 'react-redux';

export function helpers(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        }

        return state;
    };
}

export const useSelector = useSelectorGeneric;