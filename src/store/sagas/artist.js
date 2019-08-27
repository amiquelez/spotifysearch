import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';
import * as constant from '../../constants';

export function* fetchArtistInfoSaga(action){
    yield put(actions.fetchArtistInfoStart(action.id));
    const url = `${constant.ARTISTS}/${action.id}`;
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
    const url = `${constant.ARTISTS}/${action.id}/${constant.ALBUMS}`
    try{
        const response = yield axios.get(url);
        const data = response.data;
        yield put(actions.fetchArtistAlbumsSuccess(data.items));
    }catch(error) {
        yield put(actions.fetchArtistAlbumsFail(error));
    }
}

