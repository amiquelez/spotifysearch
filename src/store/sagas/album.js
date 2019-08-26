import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

export function* fetchAlbumInfoSaga(action){
    yield put(actions.fetchAlbumInfoStart(action.id));
    const url = `albums/${action.id}`;
    try{
        const response = yield axios.get(url);
        const data = response.data;
        yield put(actions.fetchAlbumInfoSuccess(data));
    }catch(error){
        yield put(actions.fetchAlbumInfoFail(error));
    }
}

export function* fetchAlbumTracksSaga(action){
    yield put(actions.fetchAlbumTracksStart(action.id));
    const url = `albums/${action.id}/tracks/`;
    try{
        const response = yield axios.get(url);
        const data = response.data;
        yield put(actions.fetchAlbumTracksSuccess(data.items));
    }catch(error){
        yield put(actions.fetchAlbumTracksFail(error));
    }
}