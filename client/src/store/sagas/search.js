import { put, delay } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';
import * as constant from '../../constants';

export function* fetchArtistsSaga(action){
    yield delay(500);
    yield put(actions.fetchArtistsStart());
    const url = `${constant.SEARCH}?q=${action.value}${constant.SEARCH_CONFIG}`;
    try{
        const response = yield axios.get(url);
        const data = response.data;
        yield put(actions.fetchArtistsSuccess(data.artists.items));
    }catch(error){
        yield put(actions.fetchArtistAlbumsFail(error));
    }
}