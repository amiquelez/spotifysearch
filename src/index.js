import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducer from './store/reducer';

const token = '';
axios.defaults.baseURL = 'https://api.spotify.com/v1/';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
