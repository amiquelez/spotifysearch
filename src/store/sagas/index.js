import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions';
import { addToFavoritesSaga, removeFromFavoritesSaga, updateFavoritesSaga } from './favorites';

export function* watchFavorites() {
    yield takeEvery(actionTypes.ADD_TO_FAVORITE_AND_UPDATE, addToFavoritesSaga);
    yield takeEvery(actionTypes.REMOVE_FAVORITE_AND_UPDATE, removeFromFavoritesSaga);
    yield takeEvery(actionTypes.UPDATE_FAVORITES_ASYNC, updateFavoritesSaga);
}