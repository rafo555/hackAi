import { useState, useEffect, useReducer, useCallback } from 'react';

import { reducer, defaultState } from './reducer';
import { FETCH_INIT, FETCH_SUCCESS, FETCH_FAILED, FETCH_RESET } from './actionTypes';
// import { fetchWithTimeout } from '../../utils';

const useFetch = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const [settings, setSettings] = useState({ url: '', isRemoveOldData: false });

    useEffect(() => {
        if (!settings.url) {
            return;
        }

        (async () => {
            dispatch({
                type: FETCH_INIT
            });

            try {
                const response = await fetch(settings.url);
                const result = await response.json();

                dispatch({
                    type: FETCH_SUCCESS,
                    data: result.response,
                    is_remove_old_data: settings.isRemoveOldData,
                    nextUrl: result.metadata.next_page || ''
                });

            } catch (error) {
                dispatch({
                    type: FETCH_FAILED,
                });
            }
        })();
    }, [settings]);

    const urlChange = useCallback((changedUrl, option = {}) => {
        setSettings({ url: changedUrl, isRemoveOldData: option.is_remove_old_data });
    }, []);

    const cleanAllData = useCallback(() => {
        dispatch({ type: FETCH_RESET });
    }, []);

    return [state, urlChange, cleanAllData];
};

export default useFetch;