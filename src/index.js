import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

const token = '';
axios.defaults.baseURL = 'https://api.spotify.com/v1/';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
