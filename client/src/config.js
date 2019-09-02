import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';

import favoritesReducer from './store/reducers/favorites';
import artistReducer from './store/reducers/artist';
import albumReducer from './store/reducers/album';
import trackReducer from './store/reducers/track';
import searchReducer from './store/reducers/search';
import authReducer from './store/reducers/auth';
import { watchFavorites, watchArtist, watchAlbum, watchTrack, watchSearch } from './store/sagas';

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
    fav: favoritesReducer,
    artist: artistReducer,
    album: albumReducer,
    track: trackReducer,
    search: searchReducer,
    auth: authReducer
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
sagaMiddleware.run(watchSearch);

store.subscribe(throttle(() => { 
    saveToLocalStorage({ fav: store.getState().fav });
}, 1000));

export default store;