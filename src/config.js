import { createStore } from 'redux';
import reducer from './store/reducer';
import axios from 'axios';

const token = '';
axios.defaults.baseURL = 'https://api.spotify.com/v1/';
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const saveToLocalStorage = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('favorites', serializedState);
    } catch(e) {
        console.log(e);
    }
}

const loadFromLocalStorage = () => {
    try{
        const serializedState = localStorage.getItem('favorites');
        if(serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch(e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;