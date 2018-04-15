import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

//import axios from "axios";

import App from './App';

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk))
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
