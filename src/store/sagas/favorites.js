import { put, select } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from '../actions/actionTypes';

export function* addToFavoritesSaga(action){
    yield put({type: actionTypes.ADD_TO_FAVORITE, songId: action.songId});
    yield put({type: actionTypes.UPDATE_FAVORITES_ASYNC})
}

export function* removeFromFavoritesSaga(action){
    yield put({type: actionTypes.REMOVE_FAVORITE, songId: action.songId});
    yield put({type: actionTypes.UPDATE_FAVORITES_ASYNC })
}

export function* updateFavoritesSaga(action){
    const state = yield select();
    const favIds = yield state.favorites.join(',');
    const url = yield `tracks/?ids=${favIds}`;
    try{
    const response = yield axios.get(url);
    const data = yield response.data;
    yield put({type: actionTypes.UPDATE_FAVORITES, tracks: data.tracks});
    } catch(error) {
        console.log(error);
    };
}