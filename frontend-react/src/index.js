import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { Provider } from 'react-redux'

import Immutable from 'immutable';

import {todos} from './reducers';

import {fetchTodos} from './actions'

import {
  combineReducers
} from 'redux-immutable';

import {
  createStore, applyMiddleware, compose
} from 'redux';


import ReduxThunk from 'redux-thunk'

import registerServiceWorker from './registerServiceWorker';

// https://github.com/gajus/redux-immutable

const initialState = Immutable.Map({todos: Immutable.List()});

// Redux DevTools setup: https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({todos});

const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(ReduxThunk)
  ));


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

store.dispatch(fetchTodos());

registerServiceWorker();
