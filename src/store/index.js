import { createStore, combineReducers, compose } from 'redux';

import { general, history } from './reducer';

const reducers = combineReducers({
    general,
    history
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers());

export default store;