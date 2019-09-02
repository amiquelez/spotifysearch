import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';
import * as constant from '../../constants';

export function* fetchAlbumInfoSaga(action){
    yield put(actions.fetchAlbumInfoStart(action.id));
    const url = `${constant.ALBUMS}/${action.id}`;
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
    const url = `${constant.ALBUMS}/${action.id}/${constant.TRACKS}/`;
    try{
        const response = yield axios.get(url);
        const data = response.data;
        yield put(actions.fetchAlbumTracksSuccess(data.items));
    }catch(error){
        yield put(actions.fetchAlbumTracksFail(error));
    }
}