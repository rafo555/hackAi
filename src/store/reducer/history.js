import {
    ADD_TO_HISTORY, UNDO, REDO, RESET_STATE
} from '../actionTypes';

import { createReducer } from '../createReducer';

const defaultState = {
    appHistory: [{ historyAction: 'image_added', settings: {} , type: 'chooser_image'}],
    appHistoryStep: 0
};

const HISTORY_LIMIT = 10;

const reducer = createReducer(defaultState, {
    [ADD_TO_HISTORY]: (state, action) => {
        let { appHistoryStep } = state;
        const appHistory = state.appHistory.map(el => el);

        appHistory.splice(++appHistoryStep);
        appHistory.push(action.data);

        if (appHistory.length > HISTORY_LIMIT) {
            appHistory.splice(1, 1);
            appHistoryStep--;
        }

        return {
            ...state,
            appHistoryStep,
            appHistory
        };
    },

    [UNDO]: (state) => {
        let { appHistoryStep } = state;

        return {
            ...state,
            appHistoryStep: --appHistoryStep <= 0 ? 0 : appHistoryStep
        };
    },

    [REDO]: (state) => {
        const { appHistory } = state;
        let { appHistoryStep } = state;

        return {
            ...state,
            appHistoryStep: ++appHistoryStep > appHistory.length ? appHistory.length : appHistoryStep
        };
    },
    [RESET_STATE]: () => defaultState
});

export default reducer;