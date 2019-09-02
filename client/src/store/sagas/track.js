import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';
import * as constant from '../../constants';

export function* fetchTrackInfoSaga(action){
    yield put(actions.fetchTrackInfoStart(action.id));
    const url = `${constant.TRACKS}/${action.id}`;
    try{
        const response = yield axios.get(url);
        const data = response.data;
        yield put(actions.fetchTrackInfoSuccess(data));
    }catch(error){
        yield put(actions.fetchTrackInfoFail(error));
    }
}