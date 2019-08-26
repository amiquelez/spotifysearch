import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* fetchArtistInfoSaga(action){
    yield put(actions.fetchArtistInfoStart(action.id));
    const url = `artists/${action.id}`;
    try{
        const response = yield axios.get(url);
        const data = response.data;
        yield put(actions.fetchArtistInfoSuccess(data));
    }catch(error) {
        yield put(actions.fetchArtistInfoFail(error));
    }
}

export function* fetchArtistAlbumsSaga(action){
    yield put(actions.fetchArtistAlbumsStart());
    const url = `artists/${action.id}/albums`
    try{
        const response = yield axios.get(url);
        const data = response.data;
        yield put(actions.fetchArtistAlbumsSuccess(data.items));
    }catch(error) {
        yield put(actions.fetchArtistAlbumsFail(error));
    }
}

