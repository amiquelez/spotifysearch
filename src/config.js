import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import axios from 'axios';
import createSagaMiddleware from 'redux-saga';

import favoritesReducer from './store/reducers/favorites';
import artistReducer from './store/reducers/artist';
import albumReducer from './store/reducers/album';
import trackReducer from './store/reducers/track';
import { watchFavorites, watchArtist, watchAlbum, watchTrack } from './store/sagas';

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

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    artist: artistReducer,
    album: albumReducer,
    track: trackReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchFavorites);
sagaMiddleware.run(watchArtist);
sagaMiddleware.run(watchAlbum);
sagaMiddleware.run(watchTrack);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;