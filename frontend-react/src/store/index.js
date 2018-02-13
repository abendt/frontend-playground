import Immutable from 'immutable';

import {
  createStore, applyMiddleware, compose
} from 'redux';

import ReduxThunk from 'redux-thunk'

import rootReducer from '../reducers';


// https://github.com/gajus/redux-immutable

const initialState = Immutable.Map({todos: Immutable.List()});

// Redux DevTools setup: https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(ReduxThunk)
  ));

export default store;