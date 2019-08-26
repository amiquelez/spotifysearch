import { takeLatest } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { addToFavoritesSaga, removeFromFavoritesSaga, updateFavoritesSaga } from './favorites';
import { fetchArtistInfoSaga, fetchArtistAlbumsSaga } from './artist';

export function* watchFavorites() {
    yield takeLatest(actionTypes.ADD_TO_FAVORITE_AND_UPDATE, addToFavoritesSaga);
    yield takeLatest(actionTypes.REMOVE_FAVORITE_AND_UPDATE, removeFromFavoritesSaga);
    yield takeLatest(actionTypes.UPDATE_FAVORITES_ASYNC, updateFavoritesSaga);
}

export function* watchArtist() {
    yield takeLatest(actionTypes.FETCH_ARTIST_INFO, fetchArtistInfoSaga);
    yield takeLatest(actionTypes.FETCH_ARTIST_ALBUMS, fetchArtistAlbumsSaga);
}