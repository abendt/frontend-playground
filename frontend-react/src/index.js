import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

import {fetchTodos} from './actions'
import store from './store'
import registerServiceWorker from './registerServiceWorker';


const render = Component => {
ReactDOM.render(
<Provider store={store}>
     <AppContainer>
        <Component />
     </AppContainer>
</Provider>, document.getElementById('root'));
}

render(App)

store.dispatch(fetchTodos());

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}