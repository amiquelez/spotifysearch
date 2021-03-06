import { put, select } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';
import * as constant from '../../constants';

export function* addToFavoritesSaga(action){
    yield put(actions.addToFavorite(action.trackId));
    yield put(actions.updateFavoritesAsync());
}

export function* removeFromFavoritesSaga(action){
    yield put(actions.removeFavorite(action.trackId));
    yield put(actions.updateFavoritesAsync());
}

export function* updateFavoritesSaga(){
    const state = yield select();
    const favorites = state.fav.favorites;
    if(favorites && favorites.length > 0){
        const favIds = yield favorites.join(',');
        const url = yield `${constant.TRACKS}/?${constant.IDS}=${favIds}`;
        try{
            const response = yield axios.get(url);
            const data = yield response.data;
            yield put(actions.updateFavorites(data.tracks));
        } catch(error) {
            console.log(error);
        };
    }else{
        yield put(actions.updateFavorites([]));
    }
}