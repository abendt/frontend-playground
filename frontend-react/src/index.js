import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { Provider } from 'react-redux'

import Immutable from 'immutable';

import {todos} from './reducers';

import {
  combineReducers
} from 'redux-immutable';

import {
  createStore
} from 'redux';

import registerServiceWorker from './registerServiceWorker';

// https://github.com/gajus/redux-immutable

const initialState = Immutable.Map({todos: Immutable.List()});
const rootReducer = combineReducers({todos});
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

registerServiceWorker();
